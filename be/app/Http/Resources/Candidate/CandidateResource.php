<?php

namespace App\Http\Resources\Candidate;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CandidateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'position_name' => $this->position->library_name,
            'phone_number' => $this->phone_number,
            'email' => $this->email,
            'cv_path' => $this->cv_path,
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d'),
            'content' => $this->content,
        ];
    }
}
