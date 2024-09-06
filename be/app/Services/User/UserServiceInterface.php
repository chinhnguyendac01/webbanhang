<?php

namespace App\Services\User;

use App\Http\Requests\Auth\ChangePasswordByUserRequest;
use App\Http\Requests\DeleteManyRequest;
use App\Http\Requests\User\UpdateUserByAdminRequest;
use App\Http\Requests\User\UpdateUserByUserRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

interface UserServiceInterface
{
    public function get_users_list(Request $request): Response;

    public function profile_by_user(string $id): Response;

    public function profile_by_admin(string $id): Response;

    public function delete_user(string $id): Response;

    public function update_by_user(UpdateUserByUserRequest $request, string $id): Response;

    public function update_by_admin(UpdateUserByAdminRequest $request, string $id): Response;

    public function create_by_admin(UpdateUserByAdminRequest $request): Response;

    public function change_password_by_user(ChangePasswordByUserRequest $request): Response;

    public function destroyMany(DeleteManyRequest $request): Response;
}
