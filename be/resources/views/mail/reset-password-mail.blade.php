{{-- <x-mail::message class="mail"> --}}
    <div class="container" style="margin: 0 auto;">
        <div class="text title-bold">実際のコード</div>
        <div class="text">こんにちは {{ $user->name }},</div>
        <div class="text">アカウントを確認するための OTP コードは次のとおりです。: <strong>{{ $otp }}</strong> </div>
    </div>
    {{-- </x-mail::message> --}}
    
    
    <style>
        .mail {
            background: #2EB9E6;
        }
    
        .container {
    
            / padding: 20px; /
        }
    
        .title-bold {
            font-size: 20px;
            font-weight: 700;
        }
    
        .text {
            color: #333;
            font-style: normal;
            line-height: normal;
        }
    </style>