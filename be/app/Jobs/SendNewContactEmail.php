<?php

namespace App\Jobs;

use App\Mail\NewContact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendNewContactEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;

    protected $repository;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function handle()
    {
        $mails = json_decode(env('MAIL_TOPLOOP', '[]'));

        Mail::to($mails)->send(new NewContact($this->data));
    }
}
