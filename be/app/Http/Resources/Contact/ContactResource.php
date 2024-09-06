<?php

namespace App\Http\Resources\Contact;

use App\Models\Libraries;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $inquiryIds = json_decode($this->inquiry_id, true);
        if (! is_array($inquiryIds)) {
            $inquiryIds = [$inquiryIds];
        }
        $inquiryNames = [];
        foreach ($inquiryIds as $inquiryId) {
            // Check if $inquiryId is a valid JSON string
            if ($inquiryId !== null && json_last_error() === JSON_ERROR_NONE) {
                $inquiryData = json_decode($inquiryId, true);

                foreach ($inquiryData as $key => $value) {
                    $library = Libraries::find($value);
                    if ($library) {
                        $inquiryNames[] = $library->library_name;
                    }
                }
            }
        }
        $inquiryNamesString = implode(', ', $inquiryNames);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'company_name' => $this->company_name,
            'position' => $this->position,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'website' => $this->website,
            'content' => $this->content,
            'attachment_path' => $this->attachment_path,
            'created_at' => Carbon::parse($this->created_at)->format('Y-m-d'),
            'inquiry_name' => $inquiryNamesString,
            'contentinquiry' => $this->decodeJsonRecursively(json_decode($this->contentinquiry, true)),
            'typeinquiry' => $this->typeinquiry,
            'inquiry_id' => $this->decodeJsonRecursively(json_decode($this->inquiry_id, true)),
        ];
    }

    private function decodeJsonRecursively($data)
    {
        if (is_array($data)) {
            foreach ($data as &$item) {
                $item = $this->decodeJsonRecursively($item);
            }
        } elseif (is_string($data) && is_array(json_decode($data, true)) && (json_last_error() == JSON_ERROR_NONE)) {
            $data = $this->decodeJsonRecursively(json_decode($data, true));
        }

        return $data;
    }
}
