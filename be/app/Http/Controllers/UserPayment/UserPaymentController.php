<?php

namespace App\Http\Controllers\UserPayment;

use App\Models\UserPayment;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
class UserPaymentController extends Controller
{

     public function getUserPayment()
     {
          $userPayment = UserPayment::join('products', 'user_payment.product_id', '=', 'products.id')
               ->select('user_payment.*', 'products.name as product_name')
               ->get();
          return new JsonResponse($userPayment);
     }

     public function addUserPayment(Request $request): JsonResponse
     {
          // Validate incoming request
          $validatedData = $request->validate([
               'user_name' => 'required|string|max:255',
               'address' => 'nullable|string|max:255',
               'phone' => 'nullable|string|max:20',
               'quantity' => 'nullable|string|max:50',
               'product_id' => 'nullable|uuid',
          ]);
          // Check if the product_id exists in the Product table
          if (!empty($validatedData['product_id']) && !Product::where('id', $validatedData['product_id'])->exists()) {
               return new JsonResponse([
                    'message' => 'The selected product does not exist.',
               ], Response::HTTP_UNPROCESSABLE_ENTITY);
          }

          // Create a new user payment
          $userPayment = UserPayment::create([
               'id' => (string) Str::uuid(),
               'user_name' => $validatedData['user_name'],
               'address' => $validatedData['address'] ?? null,
               'phone' => $validatedData['phone'] ?? null,
               'quantity' => $validatedData['quantity'] ?? null,
               'product_id' => $validatedData['product_id'] ?? null,
          ]);

          // Return the newly created user payment as a JSON response
          return new JsonResponse($userPayment, Response::HTTP_CREATED);
     }
     public function deleteUserPayment($id): JsonResponse
     {
          $userPayment = UserPayment::find($id);
          if (!$userPayment) {
               return new JsonResponse(['message' => 'User payment not found.'], Response::HTTP_NOT_FOUND);
          }
          $userPayment->delete();
          return new JsonResponse(['message' => 'User payment deleted successfully.'], Response::HTTP_OK);
     }


}