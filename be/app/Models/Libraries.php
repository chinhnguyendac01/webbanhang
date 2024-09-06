<?php

namespace App\Models;

class Libraries extends BaseModel
{
    protected $fillable = [
        'library_type',
        'library_name',
        'image',
    ];

    public function setImagePathAttribute($value)
    {
        $this->attributes['image'] = config('filesystems.disks.public.url') . '/' . $value;
    }
}
