<?php

namespace App\Services\User;

use App\ApiCode;
use App\Http\Requests\Auth\ChangePasswordByUserRequest;
use App\Http\Requests\DeleteManyRequest;
use App\Http\Requests\User\UpdateUserByAdminRequest;
use App\Http\Requests\User\UpdateUserByUserRequest;
use App\Repositories\User\UserRepositoryInterface;
use App\Traits\ResponseApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UserService implements UserServiceInterface
{
    use ResponseApi;

    public function __construct(
        private readonly UserRepositoryInterface $userRepository
    ) {
    }

    public function destroyMany(DeleteManyRequest $request): Response
    {
        try {
            $data = $request->validated();
            $result = $this->userRepository->deleteMany($data['id']);
            if ($result) {
                return $this->respondWithMessage('Success');
            } else {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }
        } catch (Throwable $th) {
            dd($th);

            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function delete_user(string $id): Response
    {
        try {
            $result = $this->userRepository->delete_user($id);
            if ($result) {
                return $this->respondWithMessage('Deleted');
            } else {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }
        } catch (Throwable) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function get_users_list(Request $request): Response
    {
        $perPage = $request->input('per_page', 10);
        $orderBy = $request->input('order_by', 'created_at');
        $direction = $request->input('direction', 'desc');

        try {
            $data = $this->userRepository->list_users($perPage, $orderBy, $direction);

            return $this->respond($data);
        } catch (Throwable) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function profile_by_admin(string $id): Response
    {
        try {
            $data = $this->userRepository->profile_by_admin($id);

            return $this->respond($data);
        } catch (Throwable) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function update_by_user(UpdateUserByUserRequest $request, string $id): Response
    {
        try {
            $data = $request->validated();

            $email = DB::table('users')
                ->where('email', '=', auth()->user()->email)
                ->get();
            if (! $email) {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }

            $result = $this->userRepository->update_profile_by_user($id, $data);
            if ($result) {
                return $this->respondWithMessage('Updated');
            } else {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }
        } catch (Throwable) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function profile_by_user(string $id): Response
    {
        try {
            $data = $this->userRepository->profile_by_user($id);

            return $this->respond($data);
        } catch (Throwable) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function update_by_admin(UpdateUserByAdminRequest $request, string $id): Response
    {
        try {
            $data = $request->validated();

            $result = $this->userRepository->update_profile_by_admin($id, $data);
            if ($result) {
                return $this->respondWithMessage('Updated');
            } else {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }
        } catch (Throwable) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function create_by_admin(UpdateUserByAdminRequest $request): Response
    {
        try {
            $data = $request->validated();

            $result = $this->userRepository->create_by_admin($data);
            if ($result) {
                return $this->respondWithMessage('Created');
            } else {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }
        } catch (Throwable $th) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }

    public function change_password_by_user(ChangePasswordByUserRequest $request): Response
    {
        try {
            $data = $request->validated();
            $result = $this->userRepository->change_password_by_user($data);
            if ($result) {
                return $this->respondWithMessage('Updated');
            } else {
                return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
            }
        } catch (Throwable $th) {
            return $this->respondWithError(ApiCode::SOMETHING_WENT_WRONG, 404);
        }
    }
}
