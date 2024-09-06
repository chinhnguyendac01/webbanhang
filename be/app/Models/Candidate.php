<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Candidate extends BaseModel
{
    protected $fillable = [
        'name',
        'position_id',
        'email',
        'phone_number',
        'cv_path',
        'content',
    ];

    public function position(): BelongsTo
    {
        return $this->belongsTo(Libraries::class, 'position_id', 'id');
    }

    // public function setCvPathAttribute($value)
    // {
    //     $this->attributes['cv_path'] = config('filesystems.disks.public.url') . '/' . $value;
    // }
}
