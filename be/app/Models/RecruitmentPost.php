<?php

namespace App\Models;

class RecruitmentPost extends BaseModel
{
    protected $fillable = [
        'title',
        'work_type_id',
        'locale_id',
        'quantity',
        'salary',
        'job_id',
        'location_id',
        'deadline',
        'content',
    ];

    public function worktype()
    {
        return $this->belongsTo(Libraries::class, 'work_type_id', 'id');
    }

    public function location()
    {
        return $this->belongsTo(Libraries::class, 'location_id', 'id')->withDefault();
    }

    public function job()
    {
        return $this->belongsTo(Libraries::class, 'job_id', 'id')->withDefault();
    }
}
