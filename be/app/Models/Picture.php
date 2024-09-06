<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Picture extends BaseModel
{
    protected $fillable = [
        'section_id',
        'path',
        'note',
    ];

    public function sections(): BelongsTo
    {
        return $this->belongsTo(Section::class, 'section_id');
    }
}
