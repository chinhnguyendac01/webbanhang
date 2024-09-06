<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends BaseModel
{
    protected $fillable = [
        'name',
        'company_name',
        'position',
        'email',
        'phone_number',
        'website',
        'content',
        'inquiry_id',
        'contentinquiry',
        'typeinquiry',
        'attachment_path',
    ];

    public function inquiry(): BelongsTo
    {
        return $this->belongsTo(Libraries::class);
    }
}
