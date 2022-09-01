<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    use HasFactory;

    protected $fillable = [
        'http_status_code',
        'path',
        'title',
        'meta_description',
        'canonical',
    ];

    public function images() {
        return $this->hasMany(Image::class);
    }

    public function videos() {
        return $this->hasMany(Video::class);
    }

    public function links() {
        return $this->hasMany(Link::class);
    }
}
