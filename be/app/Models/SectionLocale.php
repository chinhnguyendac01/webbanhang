<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SectionLocale extends BaseModel
{
    protected $fillable = [
        'section_id',
        'locale_id',
        'title',
        'content',
    ];

    // public function section(): BelongsTo
    // {
    //     return $this->belongsTo(Section::class, 'section_id', 'id');
    // }

    // public function locale(): BelongsTo
    // {
    //     return $this->belongsTo(Libraries::class, 'locale_id', 'id');
    // }
}
