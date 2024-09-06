<?php

namespace App\Models;

class Project extends BaseModel
{
    protected $fillable = [
        'name',
        'category',
        'divice',
        'description',
        'other',
        'describe',
        'banner_img',
        'detail_img',
    ];
}
