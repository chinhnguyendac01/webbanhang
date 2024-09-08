<?php

namespace App\Http\Controllers\Product;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    public function getProducts()
    {
        $products = Product::all();
        return new JsonResponse($products);
    }

    public function getProductById($id)
    {
        // Kiểm tra xem ID có phải là một UUID hợp lệ không
        if (!Str::isUuid($id)) {
            return new JsonResponse(['message' => 'Invalid UUID format'], Response::HTTP_BAD_REQUEST);
        }

        $product = Product::find($id);

        if ($product) {
            return new JsonResponse($product, Response::HTTP_OK);
        } else {
            return new JsonResponse(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }
    }

    public function addProduct(Request $request)
    {
        $product = Product::create([
            'id' => (string) Str::uuid(),
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'sale_price' => $request->input('sale_price'),
            'image' => $request->input('image'),
            'content' => $request->input('content'),
            'company' => $request->input('company'),
        ]);

        return new JsonResponse($product, Response::HTTP_CREATED);
    }
    public function updateProduct(Request $request, $id)
    {
        // Kiểm tra xem ID có phải là một UUID hợp lệ không
        if (!Str::isUuid($id)) {
            return new JsonResponse(['message' => 'Invalid UUID format'], Response::HTTP_BAD_REQUEST);
        }

        // Tìm sản phẩm theo ID
        $product = Product::find($id);

        if (!$product) {
            return new JsonResponse(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        // Cập nhật thông tin sản phẩm
        $product->name = $request->input('name', $product->name);
        $product->price = $request->input('price', $product->price);
        $product->sale_price = $request->input('sale_price', $product->sale_price);
        $product->image = $request->input('image', $product->image);
        $product->content = $request->input('content', $product->content);
        $product->company = $request->input('company', $product->company);

        $product->save();

        return new JsonResponse($product, Response::HTTP_OK);
    }
    public function deleteProduct($id)
    {
        // Kiểm tra xem ID có phải là một UUID hợp lệ không
        if (!Str::isUuid($id)) {
            return new JsonResponse(['message' => 'Invalid UUID format'], Response::HTTP_BAD_REQUEST);
        }

        // Tìm sản phẩm theo ID
        $product = Product::find($id);

        if (!$product) {
            return new JsonResponse(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        // Xóa sản phẩm
        $product->delete();

        return new JsonResponse(['message' => 'Product deleted successfully'], Response::HTTP_OK);
    }
}