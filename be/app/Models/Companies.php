<?php

namespace App\Models;

class Companies extends BaseModel
{
    protected $fillable = [
        'location_id',
        'icon_id',
        'name',
        'value',
    ];
}
