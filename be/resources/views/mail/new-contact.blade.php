{{-- <x-mail::message class="mail"> --}}
<hr>
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333; display: block;">
        <div style="margin: 20px 0; display: block;">
            <h1 style="font-size: 18px; font-weight: bold; margin-bottom: 10px; display: block;">このメールはTOP LOOPホームページから配信されています</h1>
        </div>
<hr>
<br/>
<strong>■お客様情報</strong>
<br/>
<strong>お名前: </strong>{{ $name }}
<br/>
<strong>メールアドレス:</strong> {{ $email }}
<br/>
<strong>電話番号:</strong> {{ $phone }}
<br/>
<strong>会社名:</strong> {{$company_name}}
<br/>
<strong>住所:</strong> {{$position}}
<br/>
<strong>会社ウェブサイトアドレス:</strong> {{$website}}
<br/>
<strong>■お問い合わせの種別:</strong>
<br/>
@foreach ($inquiry as $item)
    {{ $item }}<br/>
@endforeach
@if ($other_1)
    システムタイプ その他: {{ $other_1 }}<br/>
@endif
@if ($other_2)
    業務の対象 その他: {{ $other_2 }}<br/>
@endif
<strong>■特記事項: </strong> {{ $notices}}
<br/>
<strong>■お問い合わせ内容:</strong> {{ $content}}
<br/>
<br/>
<hr>  
    
<style>
    /* Reset some default styles */
    body {
        margin: 0;
        padding: 0;
        color: #0e0f3b !important;
    }
    p , span ,strong{
        font-size: 14px !important;
        color: #0e0f3b !important;
    }
    .im { 
        color: #0e0f3b !important;
    }
    .mail {
        background: #f4f4f4; /* Màu nền tổng thể của email */
        color: #333; /* Màu chữ chính */
        font-family: 'Arial', sans-serif;
    }

    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background: #ffffff; 
        border-radius: 5px; 
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
        
    }

    .header {
        /* background: #ff8b13 !important;  */
        margin-bottom: 10px !important;
        padding: 10px !important;
        text-align: center;
        border-radius: 5px !important;
        padding-left: 0px !important;
    }
    .header  h1{
        font-size: 20px !important;
        color: #ff8b13 !important;
        margin-bottom:0px !important; 
    }

    .title-bold {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .text {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
    }

    .footer {
        text-align: center;
        margin-top: 20px;
    }

    .footer-text {
        font-size: 12px;
        color: #777;
    }
</style>