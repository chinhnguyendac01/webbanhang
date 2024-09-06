<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ChangePasswordByUserRequest;
use App\Http\Requests\DeleteManyRequest;
use App\Http\Requests\User\UpdateUserByAdminRequest;
use App\Http\Requests\User\UpdateUserByUserRequest;
use App\Services\User\UserServiceInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function __construct(
        private readonly UserServiceInterface $userService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        return $this->userService->get_users_list($request);
    }

    /**
     * Display the specified resource.
     */
    public function show_by_admin(string $id): Response
    {
        return $this->userService->profile_by_admin($id);
    }

    public function show_by_user(string $id): Response
    {
        return $this->userService->profile_by_user($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update_by_user(UpdateUserByUserRequest $request, string $id): Response
    {
        return $this->userService->update_by_user($request, $id);
    }

    public function update_by_admin(UpdateUserByAdminRequest $request, string $id): Response
    {
        return $this->userService->update_by_admin($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        return $this->userService->delete_user($id);
    }

    public function deleteMany(DeleteManyRequest $request): Response
    {
        return $this->userService->destroyMany($request);
    }

    public function create_by_admin(UpdateUserByAdminRequest $request): Response
    {
        return $this->userService->create_by_admin($request);
    }

    public function change_password_by_user(ChangePasswordByUserRequest $request): Response
    {
        return $this->userService->change_password_by_user($request);
    }
}
