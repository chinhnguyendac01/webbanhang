<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

class Section extends BaseModel
{
    public function section_locale(): HasMany
    {
        return $this->hasMany(SectionLocale::class, 'section_id', 'id');
    }

    public function pictures()
    {
        return $this->hasMany(Picture::class, 'section_id');
    }
}
