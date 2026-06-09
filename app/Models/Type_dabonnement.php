<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_dabonnement extends Model
{
    /** @use HasFactory<\Database\Factories\TypeDabonnementFactory> */
    use HasFactory;

    protected $fillable = [
        'type_id',
        'nom_type',
        'duree_jours',
        'prix',
        'description'
    ];
    
}
