<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;

class NewContact extends Mailable
{
    use Queueable, SerializesModels;

    private array $data;

    private $repository;

    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->repository = App::make(\App\Repositories\Translation\TranslationRepositoryInterface::class);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {

        return new Envelope(
            subject: '【TOPLOOP】お客様からの問い合わせがありました',

        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $translatedInquiryNames = $this->translateInquiryIds($this->data['inquiry']);

        return new Content(
            markdown: 'mail.new-contact',
            with: [
                'name' => $this->data['name'],
                'email' => $this->data['email'],
                'company_name' => $this->data['company_name'],
                'content' => $this->data['content'],
                'phone' => $this->data['phone_number'] ?? '',
                'position' => $this->data['position'] ?? '',
                'website' => $this->data['website'] ?? '',
                'notices' => $this->data['notices'] ?? '',
                'inquiry' => $translatedInquiryNames,
                'other_1' => $this->data['other_1'] ?? '',
                'other_2' => $this->data['other_2'] ?? '',
            ]
        );
    }

    private function translateInquiryIds($inquiryIds)
    {
        $locale_id = $this->repository->get_locale_id('JP');
        $inquiryIds = json_decode($inquiryIds, true);
        $translatedNames = [];

        foreach ($inquiryIds as $id) {
            // Kiểm tra nếu $id không trống và không null
            if ($id !== '' && $id !== null) {
                $translatedName = $this->repository->translate_translation($id, $locale_id);
                $translatedNames[] = $translatedName;
            }
        }

        return $translatedNames;
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
