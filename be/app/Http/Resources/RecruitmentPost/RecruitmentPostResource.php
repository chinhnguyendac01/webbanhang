<?php

namespace App\Http\Resources\RecruitmentPost;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecruitmentPostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // 'id' => $this->id,
            // 'title' => $this->title,
            // 'quantity' => $this->quantity,
            // 'salary' => $this->salary,
            // 'content' => $this->content,
            // 'deadline' => Carbon::parse($this->deadline)->format('Y-m-d'),
            // // 'deadline' => $this->deadline,
            // 'work_type_name' => $this->worktype->library_name,
            // 'location_name' => $this->location->library_name,
            // 'job_name' => $this->job->library_name,
            // 'created_at' => Carbon::parse($this->created_at)->format('Y-m-d'),
            // 'work_type_id' => $this->work_type_id,
            // 'location_id' => $this->location_id,
            // 'job_id' => $this->job_id,
            'id' => $this->id,
            'title' => $this->title,
            'quantity' => $this->quantity,
            'salary' => $this->salary,
            'content' => $this->content,
            'deadline' => Carbon::parse($this->deadline)->format('Y-m-d'),
            'work_type_name' => optional($this->worktype)->library_name,
            'location_name' => optional($this->location)->library_name,
            'job_name' => optional($this->job)->library_name,
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d'),
            'work_type_id' => $this->work_type_id,
            'location_id' => $this->location_id,
            'job_id' => $this->job_id,

        ];
    }
}
