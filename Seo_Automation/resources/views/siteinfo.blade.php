<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport"/>
    <title>تحلیل سایت😉 &mdash; {{$infos[0]['url']}}</title>
    <link rel="icon" href="../images/features-3.png">
    <!-- General CSS Files -->
    <link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../lib/fontawesome/css/all.min.css"/>
    <!-- Template CSS -->
    <link rel="stylesheet" href="../css/style.css"/>
    <link rel="stylesheet" href="../css/components.css"/>
    <link rel="stylesheet" href="../css/custom.css"/>
    <!-- /END GA -->
</head>

<body>
<div id="app">
    <div class="main-wrapper main-wrapper-1">
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar">
            <form class="form-inline mr-auto">
                <ul class="navbar-nav mr-3">
                    <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a>
                    </li>
                    <li><a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i
                                class="fas fa-search"></i></a></li>
                </ul>
                <div class="search-element">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250">
                    <button class="btn" type="submit"><i class="fas fa-search"></i></button>
                    <div class="search-backdrop"></div>
                    <div class="search-result">
                        <div class="search-header">
                            Histories
                        </div>
                        <div class="search-item">
                            <a href="#">How to hack NASA using CSS</a>
                            <a href="#" class="search-close"><i class="fas fa-times"></i></a>
                        </div>
                        <div class="search-item">
                            <a href="#">Kodinger.com</a>
                            <a href="#" class="search-close"><i class="fas fa-times"></i></a>
                        </div>
                        <div class="search-item">
                            <a href="#">#Stisla</a>
                            <a href="#" class="search-close"><i class="fas fa-times"></i></a>
                        </div>
                        <div class="search-header">
                            Result
                        </div>
                        <div class="search-item">
                            <a href="#">
                                <img class="mr-3 rounded" width="30" src="assets/img/products/product-3-50.png"
                                     alt="product">
                                oPhone S9 Limited Edition
                            </a>
                        </div>
                        <div class="search-item">
                            <a href="#">
                                <img class="mr-3 rounded" width="30" src="assets/img/products/product-2-50.png"
                                     alt="product">
                                Drone X2 New Gen-7
                            </a>
                        </div>
                        <div class="search-item">
                            <a href="#">
                                <img class="mr-3 rounded" width="30" src="assets/img/products/product-1-50.png"
                                     alt="product">
                                Headphone Blitz
                            </a>
                        </div>
                        <div class="search-header">
                            Projects
                        </div>
                        <div class="search-item">
                            <a href="#">
                                <div class="search-icon bg-danger text-white mr-3">
                                    <i class="fas fa-code"></i>
                                </div>
                                Stisla Admin Template
                            </a>
                        </div>
                        <div class="search-item">
                            <a href="#">
                                <div class="search-icon bg-primary text-white mr-3">
                                    <i class="fas fa-laptop"></i>
                                </div>
                                Create a new Homepage Design
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </nav>
        <div class="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="index.html">SEO SITE</a>
                </div>
                <div class="sidebar-brand sidebar-brand-sm">
                    <a href="index.html">SS</a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">داشبورد</li>
                    <li>
                        <a href="#" class="nav-link"><i class="fas fa-sort-amount-down"></i>
                            <span>قواعد عمومی</span></a>
                    </li>
                    <li><a class="nav-link" href=""><i class="far fa-clone"></i> <span>عناصر صفحه</span></a>
                    </li>
                    <li><a class="nav-link" href=""><i class="fas fa-link"></i> <span>تمام لینک ها</span></a>
                    </li>
                </ul>
            </aside>
        </div>

        <!-- Main Content -->
        @foreach($infos as $info)
            <div class="main-content">
                <section class="section">
                    <div class="section-header justify-content-between">
                        <h1>{{ $info['url'] }} &mdash; تحلیل سئو سایت</h1>
                        <div class="section-header-button">
                            <a href="/" class="btn btn-primary">بررسی دامنه جدید</a>
                        </div>
                    </div>
                    <div class="section-body">
                        @if($info['title'])
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="section-title m-0">{{ $info['title'] }}</p>
                                <span class="badge badge-success text-right my-1">{{ $info['status'] }}</span>
                            </div>
                        @else
                            <p class="section-title-error">این سایت فاقد عنوان هست</p>
                            <span class="badge badge-success text-right my-1">{{ $info['status'] }}</span>
                        @endif
                        <hr/>
                        <div class="col-lg-12">
                            <div id="public" class="card">
                                <div class="card-header">
                                    <h4 class="d-inline">قواعد عمومی</h4>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled list-unstyled-border">
                                        <li class="media">
                                            <div class="media-body">
                                                @if(!$info['title'])
                                                    <div class="badge badge-pill badge-danger mb-1 float-right"><i
                                                            class="fas fa-times"></i></div>
                                                    <h6 class="media-title">(Title) تگ</h6>
                                                    <div class="text-small text-muted">وجود ندارد یا فاقد محتوااست Title
                                                        تگ
                                                    </div>
                                                @else
                                                    @if(!strlen($info['title']) >= 60)
                                                        <div class="badge badge-pill badge-warning mb-1 float-right"><i
                                                                class="fas fa-exclamation-triangle"></i></div>
                                                        <h6 class="media-title">(title) تگ</h6>
                                                        <div class="text-small text-muted">بیشتر از 60 کارکتر است Title
                                                            تگ
                                                        </div>
                                                    @else
                                                        <div class="badge badge-pill badge-success mb-1 float-right"><i
                                                                class="fas fa-check-circle"></i></div>
                                                        <h6 class="media-title">(Title) تگ</h6>
                                                        <div class="text-small text-muted">دارای مقدار
                                                            ({{ $info['title'] }}) است Title تگ
                                                        </div>
                                                    @endif
                                                @endif
                                            </div>
                                        </li>
                                        <li class="media">
                                            <div class="media-body">
                                                @if(!$info['meta-description'])
                                                    <div class="badge badge-pill badge-danger mb-1 float-right"><i
                                                            class="fas fa-times"></i></div>
                                                    <h6 class="media-title">(Meta Description) تگ</h6>
                                                    <div class="text-small text-muted">وجود ندارد یا فاقد محتوا است Meta
                                                        Description تگ
                                                    </div>
                                                @else
                                                    @if(strlen($info['meta-description']) >= 150)
                                                        <div class="badge badge-pill badge-warning mb-1 float-right"><i
                                                                class="fas fa-exclamation-triangle"></i></div>
                                                        <h6 class="media-title">(Meta Description) تگ</h6>
                                                        <div class="text-small text-muted"> وجود دارد ولی بیشتر از 150
                                                            کارکتر است Meta Description تگ
                                                        </div>
                                                    @else
                                                        <div class="badge badge-pill badge-success mb-1 float-right"><i
                                                                class="fas fa-check-circle"></i></div>
                                                        <h6 class="media-title">(Meta Description) تگ</h6>
                                                        <div class="text-small text-muted">با این مقدار
                                                            ({{ $info['meta-description'] }}) وجود داردMeta Description
                                                            تگ
                                                        </div>
                                                    @endif
                                                @endif
                                            </div>
                                        </li>
                                        <li class="media">
                                            <div class="media-body">
                                                @if(!$info['canonical'])
                                                    <div class="badge badge-pill badge-danger mb-1 float-right"><i
                                                            class="fas fa-times"></i></div>
                                                    <h6 class="media-title">(Canonical) تگ</h6>
                                                    <div class="text-small text-muted">وجود ندارد یا فاقد محتوا است
                                                        Canonical تگ
                                                    </div>
                                                @else
                                                    <div class="badge badge-pill badge-success mb-1 float-right"><i
                                                            class="fas fa-check-circle"></i></div>
                                                    <h6 class="media-title">(Canonical) تگ</h6>
                                                    <div class="text-small text-muted">دارای مقدار
                                                        ({{ $info['canonical'] }}) است Colonical تگ
                                                    </div>
                                                @endif
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div><hr/>
                        <div class="col-12">
                            <div id="" class="card">
                                <div class="card-header">
                                    <h4>تمام لینک ها</h4>
                                </div>
                                <div class="card-body">
                                    <div class="clearfix mb-3"></div>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <tbody>
                                            <tr>
                                                <th>متن لینک</th>
                                                <th>آدرس لینک</th>
                                            </tr>
                                            @foreach($info['links'] as $link)
                                                <tr>
                                                    <td>{{ $link[0] }}</td>
                                                    <td>{{ $link[1] }}</td>
                                                </tr>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        @endforeach
    </div>
</div>
<!-- General JS Scripts -->
<script src="../js/jquery.min.js"></script>
<script src="../js/popper.js"></script>
<script src="../js/tooltip.js"></script>
<script src="../lib/bootstrap/js/bootstrap.min.js"></script>
<script src="../js/jquery.nicescroll.min.js"></script>
<!-- Template JS File -->
<script src="../js/scripts.js"></script>
<script src="../js/custom.js"></script>
</body>
</html>
