<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport" />
    <title>سئو سایت😉</title>
    <link rel="icon" href="../images/features-3.png" />
    <!-- General CSS Files -->
    <link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../lib/fontawesome/css/all.min.css" />
    <!-- Template CSS -->
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/components.css" />
    <link rel="stylesheet" href="../css/custom.css" />
    <!-- /END GA -->
</head>

<body>
<section class="hero d-flex align-items-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center text-right">
                <h1 class="aos-init aos-animate">سئو سایت در مسیر سئو راهنمای شماست</h1>
                <h5 class="aos-init aos-animate">ابزار تحقیق کلمات کلیدی، بررسی سئو رقبا، رهگیری رتبه کلمات کلیدی، بررسی خطاهای سایت</h5>
                <div class="aos-init aos-animate">
                    <div class="text-center text-lg-end mt-3">
                        <form dir="ltr" action="{{ route('site-info') }}" method="POST" class="form">
                            @csrf
                            <input type="text" name="input-url" placeholder="https://Example.com" class="form-control input-link text-left" />
                            <input type="submit" class="btn btn-primary" value="تحلیل سئو" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 hero-img aos-init aos-animate"><img src="../images/features-2.png" class="img-fluid" alt="" /></div>
        </div>
    </div>
</section>
</body>

<!-- CDN Script -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- General JS Scripts -->
<script src="../js/jquery.min.js"></script>
<script src="../js/popper.js"></script>
<script src="../js/tooltip.js"></script>
<script src="lib/bootstrap/js/bootstrap.min.js"></script>
<script src="../js/jquery.nicescroll.min.js"></script>
<!-- Template JS File -->
<script src="../js/scripts.js"></script>
<script src="../js/custom.js"></script>
<script>
    $(function() {

        @if (Session::has('error'))
        Swal.fire({
            icon: 'error',
            title: '!اوپس',
            text: '{{ Session::get('error') }}'
        })
        @endif
    });
</script>
</html>
