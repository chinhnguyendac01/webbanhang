<?php

namespace App\Enums;

use App\Attributes\Label;
use App\Traits\AttributeEnum;

enum LibrariesEnum: int
{
    use AttributeEnum;

    #[Label('locale')]
    case LOCALES = 10;
    #[Label('type_job')]
    case TYPE_JOB = 6;
    #[Label('location')]
    case LOCATION = 8;
    #[Label('inquiry')]
    case INQUIRY = 13;

}
