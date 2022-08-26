import {css, unsafeCSS} from "lit";

export const style = css `
@charset "UTF-8";
.btn:focus,
.btn:active,
.btn:active:focus,
.custom-select:focus,
.form-control:focus {
  box-shadow: none !important;
  outline: none; }

a {
  color: #6777ef;
  font-weight: 500;
  transition: all .5s;
  -webkit-transition: all .5s;
  -o-transition: all .5s; }

a:not(.btn-social-icon):not(.btn-social):not(.page-link) .ion,
a:not(.btn-social-icon):not(.btn-social):not(.page-link) .fas,
a:not(.btn-social-icon):not(.btn-social):not(.page-link) .far,
a:not(.btn-social-icon):not(.btn-social):not(.page-link) .fal,
a:not(.btn-social-icon):not(.btn-social):not(.page-link) .fab {
  margin-left: 4px; }

.bg-primary {
  background-color: #6777ef !important; }

.bg-secondary {
  background-color: #cdd3d8 !important; }

.bg-success {
  background-color: #63ed7a !important; }

.bg-info {
  background-color: #3abaf4 !important; }

.bg-warning {
  background-color: #ffa426 !important; }

.bg-danger {
  background-color: #fc544b !important; }

.bg-light {
  background-color: #e3eaef !important; }

.bg-dark {
  background-color: #191d21 !important; }

.text-primary, .text-primary-all *, .text-primary-all *:before, .text-primary-all *:after {
  color: #6777ef !important; }

.text-secondary, .text-secondary-all *, .text-secondary-all *:before, .text-secondary-all *:after {
  color: #cdd3d8 !important; }

.text-success, .text-success-all *, .text-success-all *:before, .text-success-all *:after {
  color: #63ed7a !important; }

.text-info, .text-info-all *, .text-info-all *:before, .text-info-all *:after {
  color: #3abaf4 !important; }

.text-warning, .text-warning-all *, .text-warning-all *:before, .text-warning-all *:after {
  color: #ffa426 !important; }

.text-danger, .text-danger-all *, .text-danger-all *:before, .text-danger-all *:after {
  color: #fc544b !important; }

.text-light, .text-light-all *, .text-light-all *:before, .text-light-all *:after {
  color: #e3eaef !important; }

.text-white, .text-white-all *, .text-white-all *:before, .text-white-all *:after {
  color: #ffffff !important; }

.text-dark, .text-dark-all *, .text-dark-all *:before, .text-dark-all *:after {
  color: #191d21 !important; }

.font-weight-normal {
  font-weight: 500 !important; }

.lead {
  line-height: 34px; }

@media (max-width: 575.98px) {
  .lead {
    font-size: 17px;
    line-height: 30px; } }
h1, h2, h3, h4, h5, h6 {
  font-weight: 700; }

p, ul:not(.list-unstyled), ol {
  line-height: 28px; }

.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03); }

.text-muted {
  color: #98a6ad !important; }

/* 3.2 Form */
.form-control,
.input-group-text,
.custom-select,
.custom-file-label {
  background-color: #fdfdff;
  border-color: #e4e6fc;
}
  .form-control:focus,
  .input-group-text:focus,
  .custom-select:focus,
  .custom-file-label:focus {
    background-color: #fefeff;
    border-color: #95a0f4; }

.input-group-text,
select.form-control:not([size]):not([multiple]),
.form-control:not(.form-control-sm):not(.form-control-lg) {
  font-size: 14px;
  padding: 10px 15px;
  height: 42px; }

textarea.form-control {
  height: 64px !important; }

.custom-control {
  line-height: 1.6rem; }

.custom-file,
.custom-file-label,
.custom-select,
.custom-file-label:after,
.form-control[type="color"],
select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 6px); }

.form-control.creditcard {
  background-position: 98%;
  background-repeat: no-repeat;
  background-size: 40px;
  padding-right: 60px; }
  .form-control.creditcard.visa {
    background-image: url("../img/visa.png"); }
  .form-control.creditcard.americanexpress {
    background-image: url("../img/americanexpress.png"); }
  .form-control.creditcard.dinersclub {
    background-image: url("../img/dinersclub.png"); }
  .form-control.creditcard.discover {
    background-image: url("../img/discover.png"); }
  .form-control.creditcard.jcb {
    background-image: url("../img/jcb.png"); }
  .form-control.creditcard.mastercard {
    background-image: url("../img/mastercard.png"); }
  .form-control.creditcard.visa {
    background-image: url("../img/visa.png"); }

.form-group {
  margin-bottom: 25px; }
  .form-group .control-label,
  .form-group > label {
    font-weight: 600;
    color: #34395e;
    font-size: 12px;
    letter-spacing: .5px; }
  .form-group.floating-addon {
    position: relative; }
    .form-group.floating-addon .input-group-prepend {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 5; }
    .form-group.floating-addon:not(.floating-addon-not-append) .input-group-append {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      left: initial;
      right: 0; }
    .form-group.floating-addon .input-group-prepend .input-group-text, .form-group.floating-addon .input-group-append .input-group-text {
      border-color: transparent;
      background-color: transparent;
      font-size: 20px; }
    .form-group.floating-addon .form-control {
      border-radius: 3px;
      padding-left: 40px; }
      .form-group.floating-addon .form-control + .form-control {
        border-radius: 0 3px 3px 0;
        padding-left: 15px; }

.input-group-append [class*="btn-outline-"] {
  background-color: #fdfdff; }

.form-text {
  font-size: 12px;
  line-height: 22px; }

.custom-radio .custom-control-input:checked ~ .custom-control-label::before,
.custom-control-input:checked ~ .custom-control-label::before {
  background-color: #6777ef !important; }

.custom-file-label {
  line-height: 2.2; }
  .custom-file-label:after {
    height: calc(2.25rem + 4px);
    line-height: 2.2;
    border-color: transparent; }
  .custom-file-label:focus, .custom-file-label:active {
    box-shadow: none;
    outline: none; }

.custom-file-input:focus + .custom-file-label {
  box-shadow: none;
  border-color: #6777ef; }
  .custom-file-input:focus + .custom-file-label:after {
    border-color: transparent; }

.selectgroup {
  display: -ms-inline-flexbox;
  display: inline-flex; }

.selectgroup-item {
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative; }
  .selectgroup-item + .selectgroup-item {
    margin-left: -1px; }
  .selectgroup-item:not(:first-child) .selectgroup-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0; }
  .selectgroup-item:not(:last-child) .selectgroup-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0; }

.selectgroup-input {
  opacity: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0; }

.selectgroup-button {
  background-color: #fdfdff;
  border-color: #e4e6fc;
  border-width: 1px;
  border-style: solid;
  display: block;
  text-align: center;
  padding: 0 1rem;
  height: 35px;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 13px;
  min-width: 2.375rem;
  line-height: 36px; }

.selectgroup-button-icon {
  padding-left: .5rem;
  padding-right: .5rem; }
  .selectgroup-button-icon i {
    font-size: 14px; }

.selectgroup-input:focus + .selectgroup-button, .selectgroup-input:checked + .selectgroup-button {
  background-color: #6777ef;
  color: #fff;
  z-index: 1; }

.selectgroup-pills {
  display: block;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: start;
  align-items: flex-start; }
  .selectgroup-pills .selectgroup-item {
    margin-right: .5rem;
    -ms-flex-positive: 0;
    flex-grow: 0; }
  .selectgroup-pills .selectgroup-button {
    border-radius: 50px !important; }

.custom-switch {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  margin: 0; }

.custom-switch-input {
  position: absolute;
  z-index: -1;
  opacity: 0; }

.custom-switches-stacked {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column; }
  .custom-switches-stacked .custom-switch {
    margin-bottom: .5rem; }

.custom-switch-indicator {
  display: inline-block;
  height: 1.25rem;
  width: 2.25rem;
  background: #e9ecef;
  border-radius: 50px;
  position: relative;
  vertical-align: bottom;
  border: 1px solid rgba(0, 40, 100, 0.12);
  transition: .3s border-color, .3s background-color; }
  .custom-switch-indicator:before {
    content: '';
    position: absolute;
    height: calc(1.25rem - 4px);
    width: calc(1.25rem - 4px);
    top: 1px;
    left: 1px;
    background: #fff;
    border-radius: 50%;
    transition: .3s left; }

.custom-switch-input:checked ~ .custom-switch-indicator {
  background: #6777ef; }
  .custom-switch-input:checked ~ .custom-switch-indicator:before {
    left: calc(1rem + 1px); }
.custom-switch-input:focus ~ .custom-switch-indicator {
  border-color: #6777ef; }

.custom-switch-description {
  margin-left: .5rem;
  color: #6e7687;
  transition: .3s color; }

.custom-switch-input:checked ~ .custom-switch-description {
  color: #495057; }

.imagecheck {
  margin: 0;
  position: relative;
  cursor: pointer; }

.imagecheck-input {
  position: absolute;
  z-index: -1;
  opacity: 0; }

.imagecheck-figure {
  background-color: #fdfdff;
  border-color: #e4e6fc;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  margin: 0;
  position: relative; }

.imagecheck-input:focus ~ .imagecheck-figure {
  border-color: #6777ef; }
.imagecheck-input:checked ~ .imagecheck-figure {
  border-color: rgba(0, 40, 100, 0.24); }

.imagecheck-figure:before {
  content: '';
  position: absolute;
  top: .25rem;
  left: .25rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #6777ef url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E") no-repeat center center/50% 50%;
  color: #fff;
  z-index: 1;
  border-radius: 3px;
  opacity: 0;
  transition: .3s opacity; }

.imagecheck-input:checked ~ .imagecheck-figure:before {
  opacity: 1; }

.imagecheck-image {
  max-width: 100%;
  opacity: .64;
  transition: .3s opacity; }
  .imagecheck-image:first-child {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px; }
  .imagecheck-image:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px; }

.imagecheck:hover .imagecheck-image {
  opacity: 1; }

.imagecheck-input:focus ~ .imagecheck-figure .imagecheck-image, .imagecheck-input:checked ~ .imagecheck-figure .imagecheck-image {
  opacity: 1; }

.imagecheck-caption {
  text-align: center;
  padding: .25rem .25rem;
  color: #9aa0ac;
  font-size: 0.875rem;
  transition: .3s color; }

.imagecheck:hover .imagecheck-caption {
  color: #495057; }

.imagecheck-input:focus ~ .imagecheck-figure .imagecheck-caption, .imagecheck-input:checked ~ .imagecheck-figure .imagecheck-caption {
  color: #495057; }

.colorinput {
  margin: 0;
  position: relative;
  cursor: pointer; }

.colorinput-input {
  position: absolute;
  z-index: -1;
  opacity: 0; }

.colorinput-color {
  background-color: #fdfdff;
  border-color: #e4e6fc;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 3px;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
  .colorinput-color:before {
    content: '';
    opacity: 0;
    position: absolute;
    top: .25rem;
    left: .25rem;
    height: 1.25rem;
    width: 1.25rem;
    transition: .3s opacity;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E") no-repeat center center/50% 50%; }

.colorinput-input:checked ~ .colorinput-color:before {
  opacity: 1; }

/* 3.3 List */
.list-unstyled-border li {
  border-bottom: 1px solid #f9f9f9;
  padding-bottom: 15px;
  margin-bottom: 15px; }
  .list-unstyled-border li .custom-checkbox {
    margin-right: 15px; }
  .list-unstyled-border li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none; }

.list-unstyled-noborder li:last-child {
  border-bottom: none; }

.list-group-item.active {
  background-color: #6777ef; }
.list-group-item.disabled {
  color: #c9d7e0; }

.list-group-item-primary {
  background-color: #6777ef;
  color: #fff; }

.list-group-item-secondary {
  background-color: #cdd3d8;
  color: #fff; }

.list-group-item-success {
  background-color: #63ed7a;
  color: #fff; }

.list-group-item-danger {
  background-color: #fc544b;
  color: #fff; }

.list-group-item-warning {
  background-color: #ffa426;
  color: #fff; }

.list-group-item-info {
  background-color: #3abaf4;
  color: #fff; }

.list-group-item-light {
  background-color: #e3eaef;
  color: #191d21; }

.list-group-item-dark {
  background-color: #191d21;
  color: #fff; }

/* 3.4 Alert */
.alert {
  color: #fff;
  border: none;
  padding: 15px 20px; }
  .alert .alert-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px; }
  .alert code {
    background-color: #fff;
    border-radius: 3px;
    padding: 1px 4px; }
  .alert p {
    margin-bottom: 0; }
  .alert.alert-has-icon {
    display: flex; }
    .alert.alert-has-icon .alert-icon {
      margin-top: 4px;
      width: 30px; }
      .alert.alert-has-icon .alert-icon .ion, .alert.alert-has-icon .alert-icon .fas, .alert.alert-has-icon .alert-icon .far, .alert.alert-has-icon .alert-icon .fab, .alert.alert-has-icon .alert-icon .fal {
        font-size: 20px; }
    .alert.alert-has-icon .alert-body {
      flex: 1; }
  .alert:not(.alert-light) a {
    color: #fff; }
  .alert.alert-primary {
    background-color: #6777ef; }
  .alert.alert-secondary {
    background-color: #cdd3d8; }
  .alert.alert-success {
    background-color: #63ed7a; }
  .alert.alert-info {
    background-color: #3abaf4; }
  .alert.alert-warning {
    background-color: #ffa426; }
  .alert.alert-danger {
    background-color: #fc544b; }
  .alert.alert-light {
    background-color: #e3eaef;
    color: #191d21; }
  .alert.alert-dark {
    background-color: #191d21; }

/* 3.5 Card */
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-radius: 3px;
  border: none;
  position: relative;
  margin-bottom: 30px; }
  .card .card-header, .card .card-body, .card .card-footer {
    background-color: transparent;
    padding: 20px 25px; }
  .card .navbar {
    position: static; }
  .card .card-body {
    padding-top: 20px;
    padding-bottom: 20px; }
    .card .card-body .section-title {
      margin: 30px 0 10px 0;
      font-size: 16px; }
      .card .card-body .section-title:before {
        margin-top: 8px; }
    .card .card-body .section-title + .section-lead {
      margin-top: -5px; }
    .card .card-body p {
      font-weight: 500; }
  .card .card-header {
    border-bottom-color: #f9f9f9;
    line-height: 30px;
    -ms-grid-row-align: center;
    align-self: center;
    width: 100%;
    min-height: 70px;
    padding: 15px 25px;
    display: flex;
    align-items: center; }
    .card .card-header .btn {
      margin-top: 1px;
      padding: 2px 15px; }
      .card .card-header .btn:not(.note-btn) {
        border-radius: 30px; }
      .card .card-header .btn:hover {
        box-shadow: none; }
    .card .card-header .form-control {
      height: 31px;
      font-size: 13px;
      border-radius: 30px; }
      .card .card-header .form-control + .input-group-btn .btn {
        margin-top: -1px; }
    .card .card-header h4 {
      font-size: 16px;
      line-height: 28px;
      padding-right: 10px;
      margin-bottom: 0; }
      .card .card-header h4 + .card-header-action,
      .card .card-header h4 + .card-header-form {
        margin-left: auto; }
        .card .card-header h4 + .card-header-action .btn,
        .card .card-header h4 + .card-header-form .btn {
          font-size: 12px;
          border-radius: 30px !important;
          padding-left: 13px !important;
          padding-right: 13px !important; }
          .card .card-header h4 + .card-header-action .btn.active,
          .card .card-header h4 + .card-header-form .btn.active {
            box-shadow: 0 2px 6px #acb5f6;
            background-color: #6777ef;
            color: #fff; }
        .card .card-header h4 + .card-header-action .dropdown,
        .card .card-header h4 + .card-header-form .dropdown {
          display: inline; }
        .card .card-header h4 + .card-header-action .btn-group .btn,
        .card .card-header h4 + .card-header-form .btn-group .btn {
          border-radius: 0 !important; }
        .card .card-header h4 + .card-header-action .btn-group .btn:first-child,
        .card .card-header h4 + .card-header-form .btn-group .btn:first-child {
          border-radius: 30px 0 0 30px !important; }
        .card .card-header h4 + .card-header-action .btn-group .btn:last-child,
        .card .card-header h4 + .card-header-form .btn-group .btn:last-child {
          border-radius: 0 30px 30px 0 !important; }
        .card .card-header h4 + .card-header-action .input-group .form-control,
        .card .card-header h4 + .card-header-form .input-group .form-control {
          border-radius: 30px 0 0 30px !important; }
          .card .card-header h4 + .card-header-action .input-group .form-control + .input-group-btn .btn,
          .card .card-header h4 + .card-header-form .input-group .form-control + .input-group-btn .btn {
            border-radius: 0 30px 30px 0 !important; }
        .card .card-header h4 + .card-header-action .input-group .input-group-btn + .form-control,
        .card .card-header h4 + .card-header-form .input-group .input-group-btn + .form-control {
          border-radius: 0 30px 30px 0 !important; }
        .card .card-header h4 + .card-header-action .input-group .input-group-btn .btn,
        .card .card-header h4 + .card-header-form .input-group .input-group-btn .btn {
          margin-top: -1px;
          border-radius: 30px 0 0 30px !important; }
  .card .card-footer {
    background-color: transparent;
    border: none; }
  .card.card-mt {
    margin-top: 30px; }
  .card.card-progress:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 99;
    z-index: 99; }
  .card.card-progress .card-progress-dismiss {
    position: absolute;
    top: 66%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 999;
    color: #fff !important;
    padding: 5px 13px; }
  .card.card-progress.remove-spinner .card-progress-dismiss {
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }
  .card.card-progress:not(.remove-spinner):after {
    background-image: url("../img/spinner.svg");
    background-size: 80px;
    background-repeat: no-repeat;
    background-position: center; }
  .card.card-primary {
    border-top: 2px solid #6777ef; }
  .card.card-secondary {
    border-top: 2px solid #34395e; }
  .card.card-success {
    border-top: 2px solid #63ed7a; }
  .card.card-danger {
    border-top: 2px solid #fc544b; }
  .card.card-warning {
    border-top: 2px solid #ffa426; }
  .card.card-info {
    border-top: 2px solid #3abaf4; }
  .card.card-dark {
    border-top: 2px solid #191d21; }
  .card.card-hero .card-header {
    padding: 40px;
    background-image: linear-gradient(to bottom, #6777ef, #95a0f4);
    color: #fff;
    overflow: hidden;
    height: auto;
    min-height: auto;
    display: block; }
    .card.card-hero .card-header h4 {
      font-size: 40px;
      line-height: 1; }
    .card.card-hero .card-header .card-description {
      margin-top: 5px;
      font-size: 16px; }
    .card.card-hero .card-header .card-icon {
      float: right;
      color: #8c98f3;
      margin: -60px; }
      .card.card-hero .card-header .card-icon .ion, .card.card-hero .card-header .card-icon .fas, .card.card-hero .card-header .card-icon .far, .card.card-hero .card-header .card-icon .fab, .card.card-hero .card-header .card-icon .fal {
        font-size: 140px; }
  .card.card-statistic-1 .card-header, .card.card-statistic-2 .card-header {
    border-color: transparent;
    padding-bottom: 0;
    height: auto;
    min-height: auto;
    display: block; }
  .card.card-statistic-1 .card-header h4, .card.card-statistic-2 .card-header h4 {
    line-height: 1.2;
    color: #98a6ad; }
  .card.card-statistic-1 .card-body, .card.card-statistic-2 .card-body {
    padding-top: 0; }
  .card.card-statistic-1 .card-body, .card.card-statistic-2 .card-body {
    font-size: 26px;
    font-weight: 700;
    color: #34395e;
    padding-bottom: 0; }
  .card.card-statistic-1, .card.card-statistic-2 {
    display: inline-block;
    width: 100%; }
  .card.card-statistic-1 .card-icon, .card.card-statistic-2 .card-icon {
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 3px;
    line-height: 94px;
    text-align: center;
    float: left;
    margin-right: 15px; }
    .card.card-statistic-1 .card-icon .ion, .card.card-statistic-1 .card-icon .fas, .card.card-statistic-1 .card-icon .far, .card.card-statistic-1 .card-icon .fab, .card.card-statistic-1 .card-icon .fal, .card.card-statistic-2 .card-icon .ion, .card.card-statistic-2 .card-icon .fas, .card.card-statistic-2 .card-icon .far, .card.card-statistic-2 .card-icon .fab, .card.card-statistic-2 .card-icon .fal {
      font-size: 22px;
      color: #fff; }
  .card.card-statistic-1 .card-icon {
    line-height: 90px; }
  .card.card-statistic-2 .card-icon {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    margin: 25px; }
  .card.card-statistic-1 .card-header, .card.card-statistic-2 .card-header {
    padding-bottom: 0;
    padding-top: 25px; }
  .card.card-statistic-2 .card-body {
    padding-top: 20px; }
  .card.card-statistic-2 .card-header + .card-body, .card.card-statistic-2 .card-body + .card-header {
    padding-top: 0; }
  .card.card-statistic-1 .card-header h4, .card.card-statistic-2 .card-header h4 {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: .5px; }
  .card.card-statistic-1 .card-header h4 {
    margin-bottom: 0; }
  .card.card-statistic-2 .card-header h4 {
    text-transform: none;
    margin-bottom: 0; }
  .card.card-statistic-1 .card-body {
    font-size: 20px; }
  .card.card-statistic-2 .card-chart {
    padding-top: 20px;
    margin-left: -9px;
    margin-right: -1px;
    margin-bottom: -15px; }
    .card.card-statistic-2 .card-chart canvas {
      height: 90px !important; }
  .card .card-stats {
    width: 100%;
    display: inline-block;
    margin-top: 2px;
    margin-bottom: -6px; }
    .card .card-stats .card-stats-title {
      padding: 15px 25px;
      background-color: #fff;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .3px; }
    .card .card-stats .card-stats-items {
      display: flex;
      height: 50px;
      align-items: center; }
    .card .card-stats .card-stats-item {
      width: calc(100% / 3);
      text-align: center;
      padding: 5px 20px; }
      .card .card-stats .card-stats-item .card-stats-item-label {
        font-size: 12px;
        letter-spacing: .5px;
        margin-top: 4px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; }
      .card .card-stats .card-stats-item .card-stats-item-count {
        line-height: 1;
        margin-bottom: 8px;
        font-size: 20px;
        font-weight: 700; }
  .card.card-large-icons {
    display: flex;
    flex-direction: row; }
    .card.card-large-icons .card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 150px;
      border-radius: 3px 0 0 3px; }
      .card.card-large-icons .card-icon .ion, .card.card-large-icons .card-icon .fas, .card.card-large-icons .card-icon .far, .card.card-large-icons .card-icon .fab, .card.card-large-icons .card-icon .fal {
        font-size: 60px; }
    .card.card-large-icons .card-body {
      padding: 25px 30px; }
      .card.card-large-icons .card-body h4 {
        font-size: 18px; }
      .card.card-large-icons .card-body p {
        opacity: .6;
        font-weight: 500; }
      .card.card-large-icons .card-body a.card-cta {
        text-decoration: none; }
        .card.card-large-icons .card-body a.card-cta i {
          margin-left: 7px; }
  .card.bg-primary, .card.bg-danger, .card.bg-success, .card.bg-info, .card.bg-dark, .card.bg-warning {
    color: #fff; }
  .card.bg-primary .card-header, .card.bg-danger .card-header, .card.bg-success .card-header, .card.bg-info .card-header, .card.bg-dark .card-header, .card.bg-warning .card-header {
    color: #fff;
    opacity: .9; }

@media (max-width: 575.98px) {
  .card.card-large-icons {
    display: inline-block; }
    .card.card-large-icons .card-icon {
      width: 100%;
      height: 200px; } }
@media (max-width: 767.98px) {
  .card .card-header {
    height: auto;
    flex-wrap: wrap; }
    .card .card-header h4 + .card-header-action,
    .card .card-header h4 + .card-header-form {
      flex-grow: 0;
      width: 100%;
      margin-top: 10px; } }
@media (min-width: 768px) and (max-width: 991.98px) {
  .card .card-stats .card-stats-items {
    height: 49px; }
    .card .card-stats .card-stats-items .card-stats-item {
      padding: 5px 7px; }
      .card .card-stats .card-stats-items .card-stats-item .card-stats-item-count {
        font-size: 16px; }
  .card.card-sm-6 .card-chart canvas {
    height: 85px !important; }
  .card.card-hero .card-header {
    padding: 25px; } }
/* 3.6 Table */
.table td, .table:not(.table-bordered) th {
  border-top: none; }
.table:not(.table-sm):not(.table-md):not(.dataTable) td, .table:not(.table-sm):not(.table-md):not(.dataTable) th {
  padding: 0 25px;
  height: 60px;
  vertical-align: middle; }
.table:not(.table-sm) thead th {
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.04);
  color: #666;
  padding-top: 15px;
  padding-bottom: 15px; }
.table.table-md th, .table.table-md td {
  padding: 10px 15px; }
.table.table-bordered td, .table.table-bordered th {
  border-color: #f6f6f6; }

.table-links {
  color: #34395e;
  font-size: 12px;
  margin-top: 5px;
  opacity: 0;
  transition: all .3s; }
  .table-links a {
    color: #666; }

table tr:hover .table-links {
  opacity: 1; }

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02); }

@media (max-width: 575.98px) {
  .table-responsive table {
    min-width: 800px; } }
/* 3.7 Tooltip */
.tooltip {
  font-size: 12px; }

.tooltip-inner {
  padding: 7px 13px; }

/* 3.8 Modal */
.modal-header,
.modal-body,
.modal-footer {
  padding: 25px; }

.modal-body {
  padding-top: 15px; }

.modal-footer {
  padding-top: 15px;
  padding-bottom: 15px; }

.modal-header {
  border-bottom: none;
  padding-bottom: 5px; }
  .modal-header h5 {
    font-size: 18px; }

.modal-footer {
  border-top: none;
  border-radius: 0 0 3px 3px; }

.modal-content {
  max-width: 100%;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05); }

.modal.show .modal-content {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); }

.modal-progress .modal-content {
  position: relative; }
  .modal-progress .modal-content:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 999;
    background-image: url("../img/spinner.svg");
    background-size: 80px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 3px; }

.modal-part {
  display: none; }

/* 3.9 Nav */
.nav-tabs .nav-item .nav-link {
  color: #6777ef; }
  .nav-tabs .nav-item .nav-link.active {
    color: #000; }

.tab-content > .tab-pane {
  padding: 10px 0;
  line-height: 24px; }

.tab-bordered .tab-pane {
  padding: 15px;
  border: 1px solid #ededed;
  margin-top: -1px; }

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  color: #fff;
  background-color: #6777ef; }
.nav-pills .nav-item .nav-link {
  color: #6777ef;
  padding-left: 15px !important;
  padding-right: 15px !important; }
  .nav-pills .nav-item .nav-link:hover {
    background-color: #f6f7fe; }
  .nav-pills .nav-item .nav-link.active {
    box-shadow: 0 2px 6px #acb5f6;
    color: #fff;
    background-color: #6777ef; }
  .nav-pills .nav-item .nav-link .badge {
    padding: 5px 8px;
    margin-left: 5px; }

.nav .nav-item .nav-link .ion, .nav .nav-item .nav-link .fas, .nav .nav-item .nav-link .far, .nav .nav-item .nav-link .fab, .nav .nav-item .nav-link .fal {
  margin-right: 3px;
  font-size: 12px; }

/* 3.10 Pagination */
.page-item .page-link {
  color: #6777ef;
  border-radius: 3px;
  margin: 0 3px; }
.page-item.active .page-link {
  background-color: #6777ef;
  border-color: #6777ef; }
.page-item.disabled .page-link {
  border-color: transparent;
  background-color: #f9fafe;
  color: #6777ef;
  opacity: .6; }

.page-link {
  border-color: transparent;
  background-color: #f9fafe;
  font-weight: 600; }
  .page-link:hover {
    background-color: #6777ef;
    color: #fff;
    border-color: transparent; }
  .page-link:focus {
    box-shadow: none; }

/* 3.11 Badge */
.badges .badge {
  margin: 0 8px 10px 0; }

.badge {
  vertical-align: middle;
  padding: 7px 12px;
  font-weight: 600;
  letter-spacing: .3px;
  border-radius: 30px;
  font-size: 12px; }
  .badge.badge-warning {
    color: #fff; }
  .badge.badge-primary {
    background-color: #6777ef; }
  .badge.badge-secondary {
    background-color: #34395e; }
  .badge.badge-success {
    background-color: #63ed7a; }
  .badge.badge-info {
    background-color: #3abaf4; }
  .badge.badge-danger {
    background-color: #fc544b; }
  .badge.badge-light {
    background-color: #e3eaef;
    color: #191d21; }
  .badge.badge-white {
    background-color: #ffffff;
    color: #191d21; }
  .badge.badge-dark {
    background-color: #191d21; }

h1 .badge {
  font-size: 24px;
  padding: 16px 21px; }

h2 .badge {
  font-size: 22px;
  padding: 14px 19px; }

h3 .badge {
  font-size: 18px;
  padding: 11px 16px; }

h4 .badge {
  font-size: 16px;
  padding: 8px 13px; }

h5 .badge {
  font-size: 14px;
  padding: 5px 10px; }

h6 .badge {
  font-size: 11px;
  padding: 3px 8px; }

.btn .badge {
  margin-left: 5px;
  padding: 4px 7px; }
  .btn .badge.badge-transparent {
    background-color: rgba(255, 255, 255, 0.25);
    color: #fff; }

/* 3.12 Button */
.buttons .btn {
  margin: 0 8px 10px 0; }

.btn:focus {
  box-shadow: none !important;
  outline: none; }
.btn:active {
  box-shadow: none !important;
  outline: none; }
  .btn:active:focus {
    box-shadow: none !important;
    outline: none; }

.btn.btn-icon-split i, .dropdown-item.has-icon i {
  text-align: center;
  width: 15px;
  font-size: 15px;
  float: left;
  margin-right: 10px; }

.btn {
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  padding: .3rem .8rem;
  letter-spacing: .5px; }
  .btn.btn-icon-split {
    position: relative; }
    .btn.btn-icon-split i {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 45px;
      border-radius: 3px 0 0 3px;
      line-height: 32px; }
    .btn.btn-icon-split div {
      margin-left: 40px; }
  .btn.btn-icon-noflo-splitat {
    display: table;
    text-align: right; }
    .btn.btn-icon-noflo-splitat i {
      float: none;
      margin: 0;
      display: table-cell;
      vertical-align: middle;
      width: 30%; }
    .btn.btn-icon-noflo-splitat div {
      display: table-cell;
      vertical-align: middle;
      width: 70%;
      text-align: left;
      padding-left: 10px; }
  .btn:not(.btn-social):not(.btn-social-icon):active, .btn:not(.btn-social):not(.btn-social-icon):focus, .btn:not(.btn-social):not(.btn-social-icon):hover {
    border-color: transparent !important;
    background-color: white; }
  .btn > i {
    margin-left: 0 !important; }
  .btn.btn-lg {
    padding: .55rem 1.5rem;
    font-size: 12px; }
    .btn.btn-lg.btn-icon-split i {
      line-height: 42px; }
    .btn.btn-lg.btn-icon-split div {
      margin-left: 25px; }
  .btn.btn-sm {
    padding: .10rem .4rem;
    font-size: 12px; }
  .btn.btn-icon .ion, .btn.btn-icon .fas, .btn.btn-icon .far, .btn.btn-icon .fab, .btn.btn-icon .fal {
    margin-left: 0 !important;
    font-size: 12px; }
  .btn.btn-icon.icon-left .ion, .btn.btn-icon.icon-left .fas, .btn.btn-icon.icon-left .far, .btn.btn-icon.icon-left .fab, .btn.btn-icon.icon-left .fal {
    margin-right: 3px; }
  .btn.btn-icon.icon-right .ion, .btn.btn-icon.icon-right .fas, .btn.btn-icon.icon-right .far, .btn.btn-icon.icon-right .fab, .btn.btn-icon.icon-right .fal {
    margin-left: 3px !important; }

.btn-action {
  color: #fff !important;
  line-height: 25px;
  font-size: 12px;
  min-width: 35px;
  min-height: 35px; }

.btn-secondary, .btn-secondary.disabled {
  box-shadow: 0 2px 6px #e1e5e8;
  background-color: #cdd3d8;
  border-color: #cdd3d8;
  color: #fff; }
  .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.disabled:hover, .btn-secondary.disabled:focus, .btn-secondary.disabled:active {
    background-color: #bfc6cd !important;
    color: #fff !important; }

.btn-outline-secondary:hover, .btn-outline-secondary:focus, .btn-outline-secondary:active, .btn-outline-secondary.disabled:hover, .btn-outline-secondary.disabled:focus, .btn-outline-secondary.disabled:active {
  background-color: #cdd3d8 !important;
  color: #fff !important; }

.btn-success, .btn-success.disabled {
  box-shadow: 0 2px 6px #a8f5b4;
  background-color: #63ed7a;
  border-color: #63ed7a;
  color: #fff; }
  .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled:active {
    background-color: #4cea67 !important;
    color: #fff !important; }

.btn-outline-success:hover, .btn-outline-success:focus, .btn-outline-success:active, .btn-outline-success.disabled:hover, .btn-outline-success.disabled:focus, .btn-outline-success.disabled:active {
  background-color: #63ed7a !important;
  color: #fff !important; }

.btn-danger, .btn-danger.disabled {
  box-shadow: 0 2px 6px #fd9b96;
  background-color: #fc544b;
  border-color: #fc544b;
  color: #fff; }
  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled:active {
    background-color: #fb160a !important; }

.btn-outline-danger:hover, .btn-outline-danger:focus, .btn-outline-danger:active, .btn-outline-danger.disabled:hover, .btn-outline-danger.disabled:focus, .btn-outline-danger.disabled:active {
  background-color: #fb160a !important;
  color: #fff !important; }

.btn-dark, .btn-dark.disabled {
  box-shadow: 0 2px 6px #728394;
  background-color: #191d21;
  border-color: #191d21;
  color: #fff; }
  .btn-dark:hover, .btn-dark:focus, .btn-dark:active, .btn-dark.disabled:hover, .btn-dark.disabled:focus, .btn-dark.disabled:active {
    background-color: black !important; }

.btn-outline-dark:hover, .btn-outline-dark:focus, .btn-outline-dark:active, .btn-outline-dark.disabled:hover, .btn-outline-dark.disabled:focus, .btn-outline-dark.disabled:active {
  background-color: black !important;
  color: #fff !important; }

.btn-light, .btn-light.disabled {
  box-shadow: 0 2px 6px #e6ecf1;
  background-color: #e3eaef;
  border-color: #e3eaef;
  color: #191d21; }
  .btn-light:hover, .btn-light:focus, .btn-light:active, .btn-light.disabled:hover, .btn-light.disabled:focus, .btn-light.disabled:active {
    background-color: #c3d2dc !important; }

.btn-outline-light, .btn-outline-light.disabled {
  border-color: #e3eaef;
  color: #e3eaef; }
  .btn-outline-light:hover, .btn-outline-light:focus, .btn-outline-light:active, .btn-outline-light.disabled:hover, .btn-outline-light.disabled:focus, .btn-outline-light.disabled:active {
    background-color: #e3eaef !important;
    color: #fff !important; }

.btn-warning, .btn-warning.disabled {
  box-shadow: 0 2px 6px #ffc473;
  background-color: #ffa426;
  border-color: #ffa426;
  color: #fff; }
  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled:active {
    background-color: #ff990d !important;
    color: #fff !important; }

.btn-outline-warning:hover, .btn-outline-warning:focus, .btn-outline-warning:active, .btn-outline-warning.disabled:hover, .btn-outline-warning.disabled:focus, .btn-outline-warning.disabled:active {
  background-color: #ffa426 !important;
  color: #fff !important; }

.btn-info, .btn-info.disabled {
  box-shadow: 0 2px 6px #82d3f8;
  background-color: #3abaf4;
  border-color: #3abaf4;
  color: #fff; }
  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled:active {
    background-color: #0da8ee !important; }

.btn-outline-info:hover, .btn-outline-info:focus, .btn-outline-info:active, .btn-outline-info.disabled:hover, .btn-outline-info.disabled:focus, .btn-outline-info.disabled:active {
  background-color: #0da8ee !important;
  color: #fff !important; }

.btn-primary, .btn-primary.disabled {
  box-shadow: 0 2px 6px #acb5f6;
  background-color: #6777ef;
  border-color: #6777ef; }
  .btn-primary:focus, .btn-primary.disabled:focus {
    background-color: #394eea !important; }
    .btn-primary:focus:active, .btn-primary.disabled:focus:active {
      background-color: #394eea !important; }
  .btn-primary:active, .btn-primary:hover, .btn-primary.disabled:active, .btn-primary.disabled:hover {
    background-color: #394eea !important; }

.btn-outline-primary, .btn-outline-primary.disabled {
  border-color: #6777ef;
  color: #6777ef; }
  .btn-outline-primary:hover, .btn-outline-primary:focus, .btn-outline-primary:active, .btn-outline-primary.disabled:hover, .btn-outline-primary.disabled:focus, .btn-outline-primary.disabled:active {
    background-color: #6777ef !important;
    color: #fff; }

.btn-outline-white, .btn-outline-white.disabled {
  border-color: #fff;
  color: #fff; }
  .btn-outline-white:hover, .btn-outline-white:focus, .btn-outline-white:active, .btn-outline-white.disabled:hover, .btn-outline-white.disabled:focus, .btn-outline-white.disabled:active {
    background-color: #fff;
    color: #6777ef; }

.btn-round {
  border-radius: 30px;
  padding-left: 34px;
  padding-right: 34px; }

.btn-social-icon, .btn-social {
  border: none;
  border-radius: 3px; }

.btn-social-icon {
  color: #fff !important;
  padding-left: 18px;
  padding-right: 18px; }
  .btn-social-icon > :first-child {
    font-size: 16px; }

.btn-social {
  padding: 12px 12px 12px 50px;
  color: #fff !important;
  font-weight: 500; }
  .btn-social > :first-child {
    width: 55px;
    line-height: 50px;
    border-right: none; }

.btn-reddit {
  color: #000 !important; }

.btn-group .btn.active {
  background-color: #6777ef;
  color: #fff; }

.btn-progress {
  position: relative;
  background-image: url("../img/spinner-white.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px;
  color: transparent !important;
  pointer-events: none; }

/* 3.13 Media */
.media .media-right {
  float: right;
  color: #6777ef;
  font-weight: 600;
  font-size: 16px; }
.media .media-icon {
  font-size: 20px;
  margin-right: 15px;
  line-height: 1; }
.media .media-title {
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 15px;
  color: #34395e; }
  .media .media-title a {
    font-weight: inherit;
    color: #000; }
.media .media-description {
  line-height: 24px;
  color: #34395e; }
.media .media-links {
  margin-top: 10px; }
  .media .media-links a {
    font-size: 12px;
    color: #999; }
.media .media-progressbar {
  flex: 1; }
  .media .media-progressbar .progress-text {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #34395e; }
.media .media-cta {
  margin-left: 40px; }
  .media .media-cta .btn {
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 12px; }
.media .media-items {
  display: flex; }
  .media .media-items .media-item {
    flex: 1;
    text-align: center;
    padding: 0 15px; }
    .media .media-items .media-item .media-label {
      font-weight: 600;
      font-size: 12px;
      color: #34395e;
      letter-spacing: .5px; }
    .media .media-items .media-item .media-value {
      font-weight: 700;
      font-size: 18px; }

/* 3.14 Breadcrumb */
.breadcrumb {
  background-color: #f9f9f9; }
  .breadcrumb .breadcrumb-item {
    line-height: 1; }
    .breadcrumb .breadcrumb-item i {
      margin-right: 5px; }

/* 3.15 Accordion */
.accordion {
  display: inline-block;
  width: 100%;
  margin-bottom: 10px; }
  .accordion .accordion-header, .accordion .accordion-body {
    padding: 10px 15px; }
  .accordion .accordion-header {
    background-color: #f9f9f9;
    border-radius: 3px;
    cursor: pointer;
    transition: all .5s; }
    .accordion .accordion-header h4 {
      line-height: 1;
      margin: 0;
      font-size: 14px;
      font-weight: 700; }
    .accordion .accordion-header:hover {
      background-color: #f2f2f2; }
    .accordion .accordion-header[aria-expanded="true"] {
      box-shadow: 0 2px 6px #acb5f6;
      background-color: #6777ef;
      color: #fff; }
  .accordion .accordion-body {
    line-height: 24px; }

/* 3.16 Popover */
.popover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  border-color: transparent; }
  .popover .manual-arrow {
    position: absolute;
    bottom: -15px;
    font-size: 26px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #fff; }

.bs-popover-auto[x-placement^=left] .arrow::before, .bs-popover-left .arrow::before {
  border-left-color: #f2f2f2; }

.bs-popover-auto[x-placement^=bottom] .arrow::before, .bs-popover-bottom .arrow::before {
  border-bottom-color: #f2f2f2; }

.bs-popover-auto[x-placement^=top] .arrow::before, .bs-popover-top .arrow::before {
  border-top-color: #f2f2f2; }

.bs-popover-auto[x-placement^=right] .arrow::before, .bs-popover-right .arrow::before {
  border-right-color: #f2f2f2; }

.popover .popover-header {
  background-color: transparent;
  border: none;
  padding-bottom: 0;
  padding-top: 10px; }
.popover .popover-body {
  padding: 15px;
  line-height: 24px; }

/* 3.17 Grid */
.sm-gutters {
  margin-left: -5px;
  margin-right: -5px; }
  .sm-gutters > .col, .sm-gutters > [class*=col-] {
    padding-left: 5px;
    padding-right: 5px; }

/* 3.18 Navbar */
.navbar {
  height: 70px;
  left: 250px;
  right: 5px;
  position: absolute;
  z-index: 890;
  background-color: transparent; }
  .navbar.active {
    background-color: #6777ef;
    box-shadow: rgba(103, 119, 239, 0.2) rgba(0, 0, 0, 0.03); }

.navbar-bg {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 115px;
  background-color: #6777ef;
  z-index: -1; }

.navbar {
  align-items: center; }
  .navbar .navbar-brand {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700; }
  .navbar .form-inline .form-control {
    background-color: #fff;
    border-color: transparent;
    padding-left: 20px;
    padding-right: 0;
    margin-right: -6px;
    min-height: 46px;
    font-weight: 500;
    border-radius: 3px 0 0 3px;
    transition: all 1s; }
    .navbar .form-inline .form-control:focus, .navbar .form-inline .form-control:focus + .btn {
      position: relative;
      z-index: 9001; }
    .navbar .form-inline .form-control:focus + .btn + .search-backdrop {
      opacity: .6;
      visibility: visible; }
    .navbar .form-inline .form-control:focus + .btn + .search-backdrop + .search-result {
      opacity: 1;
      visibility: visible;
      top: 80px; }
  .navbar .form-inline .btn {
    border-radius: 0 3px 3px 0;
    background-color: #fff;
    padding: 9px 15px 9px 15px;
    border-color: transparent; }
  .navbar .form-inline .search-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9000;
    background-color: #000;
    opacity: 0;
    visibility: hidden;
    transition: all .5s; }
  .navbar .form-inline .search-result {
    position: absolute;
    z-index: 9002;
    top: 100px;
    background-color: #fff;
    border-radius: 3px;
    width: 450px;
    opacity: 0;
    visibility: hidden;
    transition: all .5s; }
    .navbar .form-inline .search-result:before {
      position: absolute;
      top: -26px;
      left: 34px;
      content: '\\f0d8';
      font-weight: 600;
      font-family: 'Font Awesome 5 Free';
      color: #fff;
      font-size: 30px; }
    .navbar .form-inline .search-result .search-header {
      padding: 13px 18px 2px 18px;
      text-transform: uppercase;
      letter-spacing: 1.3px;
      font-weight: 600;
      font-size: 10px;
      color: #bcc1c6; }
    .navbar .form-inline .search-result .search-item {
      display: flex; }
      .navbar .form-inline .search-result .search-item a {
        display: block;
        padding: 13px 18px;
        text-decoration: none;
        color: #34395e;
        font-weight: 600;
        display: flex;
        align-items: center; }
        .navbar .form-inline .search-result .search-item a:hover {
          background-color: #fbfbff; }
        .navbar .form-inline .search-result .search-item a:not(.search-close) {
          width: 100%; }
        .navbar .form-inline .search-result .search-item a i {
          margin-left: 0 !important; }
      .navbar .form-inline .search-result .search-item .search-icon {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 50%; }
  .navbar .active .nav-link {
    color: #fff;
    font-weight: 700; }
  .navbar .navbar-text {
    color: #fff; }
  .navbar .nav-link {
    color: #f2f2f2;
    padding-left: 15px !important;
    padding-right: 15px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    height: 100%; }
    .navbar .nav-link.nav-link-lg div {
      margin-top: 3px; }
    .navbar .nav-link.nav-link-lg i {
      margin-left: 0 !important;
      font-size: 18px;
      line-height: 32px; }
    .navbar .nav-link.nav-link-user {
      color: #fff;
      padding-top: 4px;
      padding-bottom: 4px;
      font-weight: 600; }
      .navbar .nav-link.nav-link-user img {
        width: 30px; }
    .navbar .nav-link.nav-link-img {
      padding-top: 4px;
      padding-bottom: 4px;
      border-radius: 50%;
      overflow: hidden; }
      .navbar .nav-link.nav-link-img .flag-icon {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
        border-radius: 50%;
        line-height: 18px;
        height: 22px;
        width: 22px;
        background-size: cover; }

.remove-caret:after {
  display: none; }

.navbar .nav-link:hover {
  color: #fff; }
.navbar .nav-link.disabled {
  color: #fff;
  opacity: .6; }

.nav-collapse {
  display: flex; }

@media (max-width: 575.98px) {
  body.search-show .navbar .form-inline .search-element {
    display: block; }

  .navbar .form-inline .search-element {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    z-index: 892;
    display: none; }
    .navbar .form-inline .search-element .form-control {
      float: left;
      border-radius: 3px 0 0 3px;
      width: calc(100% - 43px) !important; }
    .navbar .form-inline .search-element .btn {
      margin-top: 1px;
      border-radius: 0 3px 3px 0; }
  .navbar .form-inline .search-result {
    width: 100%; }
  .navbar .form-inline .search-backdrop {
    display: none; }
  .navbar .nav-link.nav-link-lg div {
    display: none; } }
@media (min-width: 576px) and (max-width: 767.98px) {
  .navbar .form-inline .search-element {
    display: block; } }
@media (min-width: 768px) and (max-width: 991.98px) {
  .collapse {
    position: relative; }
    .collapse .navbar-nav {
      position: absolute; } }
@media (max-width: 1024px) {
  .nav-collapse {
    position: relative; }
    .nav-collapse .navbar-nav {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.03);
      position: absolute;
      top: 40px;
      left: 0;
      width: 200px;
      display: none; }
      .nav-collapse .navbar-nav.show {
        display: block; }
      .nav-collapse .navbar-nav .nav-item:first-child {
        border-radius: 3px 3px 0 0; }
      .nav-collapse .navbar-nav .nav-item:last-child {
        border-radius: 0 0 3px 3px; }
      .nav-collapse .navbar-nav .nav-item .nav-link {
        background-color: #fff;
        color: #6c757d; }
        .nav-collapse .navbar-nav .nav-item .nav-link:hover {
          background-color: #fcfcfd;
          color: #6777ef; }
      .nav-collapse .navbar-nav .nav-item:focus > a, .nav-collapse .navbar-nav .nav-item.active > a {
        background-color: #6777ef;
        color: #fff; }

  .navbar {
    left: 5px;
    right: 0; }
    .navbar .dropdown-menu {
      position: absolute; }
    .navbar .navbar-nav {
      flex-direction: row; }

  .navbar-expand-lg .navbar-nav .dropdown-menu-right {
    right: 0;
    left: auto; } }
/* 3.19 Dropdown */
.dropdown-item.has-icon i {
  margin-top: -1px;
  font-size: 13px; }

.dropdown-menu {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.03);
  border: none;
  width: 200px; }
  .dropdown-menu.show {
    display: block !important; }
  .dropdown-menu a {
    font-size: 13px; }
  .dropdown-menu .dropdown-title {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.5px;
    font-weight: 700;
    color: #191d21 !important;
    padding: 10px 20px;
    line-height: 20px;
    color: #98a6ad; }
  .dropdown-menu.dropdown-menu-sm a {
    font-size: 14px;
    letter-spacing: normal;
    padding: 10px 20px;
    color: #6c757d; }

a.dropdown-item {
  padding: 10px 20px;
  font-weight: 500;
  line-height: 1.2; }
  a.dropdown-item:focus, a.dropdown-item:active, a.dropdown-item.active {
    background-color: #6777ef;
    color: #fff !important; }

.dropdown-divider {
  border-top-color: #f9f9f9; }

.dropdown-list {
  width: 350px;
  padding: 0; }
  .dropdown-list .dropdown-item {
    display: inline-block;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 13px;
    border-bottom: 1px solid #f9f9f9; }
    .dropdown-list .dropdown-item.dropdown-item-header:hover {
      background-color: transparent; }
    .dropdown-list .dropdown-item .time {
      margin-top: 10px;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: .5px; }
    .dropdown-list .dropdown-item .dropdown-item-avatar {
      float: left;
      width: 40px;
      text-align: right;
      position: relative; }
      .dropdown-list .dropdown-item .dropdown-item-avatar img {
        width: 100%; }
      .dropdown-list .dropdown-item .dropdown-item-avatar .is-online {
        position: absolute;
        bottom: 0;
        right: 0; }
    .dropdown-list .dropdown-item .dropdown-item-desc {
      line-height: 24px;
      white-space: normal;
      color: #34395e;
      margin-left: 60px; }
      .dropdown-list .dropdown-item .dropdown-item-desc b {
        font-weight: 600;
        color: #666; }
      .dropdown-list .dropdown-item .dropdown-item-desc p {
        margin-bottom: 0; }
    .dropdown-list .dropdown-item:focus {
      background-color: #6777ef; }
      .dropdown-list .dropdown-item:focus .dropdown-item-desc {
        color: #fff !important; }
        .dropdown-list .dropdown-item:focus .dropdown-item-desc b {
          color: #fff !important; }
    .dropdown-list .dropdown-item.dropdown-item-unread:active .dropdown-item-desc {
      color: #6c757d; }
      .dropdown-list .dropdown-item.dropdown-item-unread:active .dropdown-item-desc b {
        color: #6c757d; }
    .dropdown-list .dropdown-item:active .dropdown-item-desc {
      color: #fff; }
      .dropdown-list .dropdown-item:active .dropdown-item-desc b {
        color: #fff; }
    .dropdown-list .dropdown-item.dropdown-item-unread {
      background-color: #fbfbfb;
      border-bottom-color: #f2f2f2; }
      .dropdown-list .dropdown-item.dropdown-item-unread:focus .dropdown-item-desc {
        color: #6c757d !important; }
        .dropdown-list .dropdown-item.dropdown-item-unread:focus .dropdown-item-desc b {
          color: #6c757d !important; }
  .dropdown-list .dropdown-footer,
  .dropdown-list .dropdown-header {
    letter-spacing: .5px;
    font-weight: 600;
    padding: 15px; }
    .dropdown-list .dropdown-footer a,
    .dropdown-list .dropdown-header a {
      font-weight: 600; }
  .dropdown-list .dropdown-list-content {
    height: 350px;
    overflow: hidden; }
    .dropdown-list .dropdown-list-content:not(.is-end):after {
      content: ' ';
      position: absolute;
      bottom: 46px;
      left: 0;
      width: 100%;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
      height: 60px; }
  .dropdown-list .dropdown-list-icons .dropdown-item {
    display: flex; }
    .dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-icon {
      flex-shrink: 0;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      line-height: 42px;
      text-align: center; }
      .dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-icon i {
        margin: 0; }
    .dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-desc {
      margin-left: 15px;
      line-height: 20px; }
      .dropdown-list .dropdown-list-icons .dropdown-item .dropdown-item-desc .time {
        margin-top: 5px; }

.dropdown-flag .dropdown-item {
  font-weight: 600; }
  .dropdown-flag .dropdown-item .flag-icon {
    width: 20px;
    height: 13px;
    margin-right: 7px;
    margin-top: -6px; }
  .dropdown-flag .dropdown-item.active {
    background-color: #6777ef;
    color: #fff; }

@media (max-width: 575.98px) {
  .dropdown-list-toggle {
    position: static; }
    .dropdown-list-toggle .dropdown-list {
      left: 10px !important;
      width: calc(100% - 20px); } }
/* 3.20 Dropdown */
.tab-content.no-padding > .tab-pane {
  padding: 0; }
.tab-content > .tab-pane {
  line-height: 28px; }

/* 3.21 Progress Bar */
.progress-bar {
  background-color: #6777ef; }

/* 3.22 Jumbotron */
.jumbotron {
  background-color: #e3eaef; }

/* 3.23 Carousel */
.carousel .carousel-caption p {
  font-size: 13px;
  line-height: 24px; }

/* 4. Theme Style */
/* 4.1 Misc */
/* nunito-regular - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/nunito-v9-latin-regular.eot");
  /* IE9 Compat Modes */
  src: local("Nunito Regular"), local("Nunito-Regular"), url("../fonts/nunito-v9-latin-regular.eot") format("embedded-opentype"), url("../fonts/nunito-v9-latin-regular.woff2") format("woff2"), url("../fonts/nunito-v9-latin-regular.woff") format("woff"), url("../fonts/nunito-v9-latin-regular.ttf") format("truetype"), url("../fonts/nunito-v9-latin-regular.svg#Nunito") format("svg");
  /* Legacy iOS */ }
/* nunito-600 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  src: url("../fonts/nunito-v9-latin-600.eot");
  /* IE9 Compat Modes */
  src: local("Nunito SemiBold"), local("Nunito-SemiBold"), url("../fonts/nunito-v9-latin-600.eot") format("embedded-opentype"), url("../fonts/nunito-v9-latin-600.woff2") format("woff2"), url("../fonts/nunito-v9-latin-600.woff") format("woff"), url("../fonts/nunito-v9-latin-600.ttf") format("truetype"), url("../fonts/nunito-v9-latin-600.svg#Nunito") format("svg");
  /* Legacy iOS */ }
/* nunito-700 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url("../fonts/nunito-v9-latin-700.eot");
  /* IE9 Compat Modes */
  src: local("Nunito Bold"), local("Nunito-Bold"), url("../fonts/nunito-v9-latin-700.eot") format("embedded-opentype"), url("../fonts/nunito-v9-latin-700.woff2") format("woff2"), url("../fonts/nunito-v9-latin-700.woff") format("woff"), url("../fonts/nunito-v9-latin-700.ttf") format("truetype"), url("../fonts/nunito-v9-latin-700.svg#Nunito") format("svg");
  /* Legacy iOS */ }
/* nunito-800 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  src: url("../fonts/nunito-v9-latin-800.eot");
  /* IE9 Compat Modes */
  src: local("Nunito ExtraBold"), local("Nunito-ExtraBold"), url("../fonts/nunito-v9-latin-800.eot") format("embedded-opentype"), url("../fonts/nunito-v9-latin-800.woff2") format("woff2"), url("../fonts/nunito-v9-latin-800.woff") format("woff"), url("../fonts/nunito-v9-latin-800.ttf") format("truetype"), url("../fonts/nunito-v9-latin-800.svg#Nunito") format("svg");
  /* Legacy iOS */ }
:root {
  /* Colors */
  --primary: color(primary);
  --secondary: color(fontdark);
  --success: color(success);
  --info: color(info);
  --warning: color(warning);
  --danger: color(danger);
  --light: color(light);
  --dark: color(dark); }

body {
  background-color: #fafdfb;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Nunito', 'Segoe UI', arial;
  color: #6c757d; }

a.bb {
  text-decoration: none;
  border-bottom: 1px solid #6777ef;
  padding-bottom: 1px; }

.form-divider {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600; }

.ui-sortable-handle,
.sort-handler {
  cursor: move; }

.text-job {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: #34395e; }

.text-time {
  font-size: 12px;
  color: #666;
  font-weight: 500;
  margin-bottom: 10px; }

.bullet, .slash {
  display: inline;
  margin: 0 4px; }

.bullet:after {
  content: '\\2022'; }

.slash:after {
  content: '/'; }

.login-brand {
  margin: 20px 0;
  margin-bottom: 40px;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #666;
  text-align: center; }

.font-weight-600 {
  font-weight: 600 !important; }

.budget-price {
  display: inline-block;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3px; }
  .budget-price .budget-price-square {
    width: 15px;
    height: 3px;
    background-color: #f9f9f9; }
  .budget-price .budget-price-label {
    font-size: 12px;
    font-weight: 600;
    margin-left: 5px; }

.gradient-bottom {
  position: relative; }
  .gradient-bottom:after {
    content: ' ';
    position: absolute;
    bottom: 41px;
    left: 0;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
    height: 60px; }

.text-small {
  font-size: 12px;
  line-height: 20px; }

.text-title {
  font-size: 14px;
  color: #34395e;
  font-weight: 600; }

.img-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03); }

.colors {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px; }
  .colors .color {
    border-radius: 3px;
    width: calc((100% / 4) - 10px);
    padding: 10px;
    height: 60px;
    line-height: 40px;
    text-align: center;
    margin: 5px; }

blockquote {
  padding: 20px;
  padding-left: 40px;
  font-style: oblique;
  background-color: #f9f9f9;
  border-radius: 3px;
  position: relative;
  font-family: 'Time new Romans';
  font-size: 16px;
  letter-spacing: .3px; }
  blockquote:before {
    content: '"';
    font-size: 30px;
    position: absolute;
    top: 10px;
    left: 20px;
    opacity: .2; }
  blockquote .blockquote-footer {
    margin-top: 10px; }

.bg-whitesmoke {
  background-color: #f7f9f9 !important; }

.ion {
  font-size: 15px; }

.fas, .far, .fab, .fal {
  font-size: 13px; }

#visitorMap {
  height: 210px; }

.sidebar-gone-show {
  display: none !important; }

pre {
  border-radius: 3px; }

.circle-step {
  display: flex;
  margin-bottom: 10px; }
  .circle-step .circle-content {
    margin-top: 3px;
    margin-left: 13px; }
  .circle-step .circle {
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 30px;
    font-size: 11px;
    text-align: center; }
    .circle-step .circle.circle-primary {
      border-color: #6777ef;
      color: #6777ef; }

.pe-none {
  pointer-events: none; }

.contact-map {
  width: 100%;
  height: 100%;
  min-height: 400px; }

#visitorMap2,
#visitorMap3 {
  height: 350px; }

.shadow-primary {
  box-shadow: 0 2px 6px #acb5f6; }

.shadow-secondary {
  box-shadow: 0 2px 6px #e1e5e8; }

.shadow-success {
  box-shadow: 0 2px 6px #a8f5b4; }

.shadow-warning {
  box-shadow: 0 2px 6px #ffc473; }

.shadow-danger {
  box-shadow: 0 2px 6px #fd9b96; }

.shadow-info {
  box-shadow: 0 2px 6px #82d3f8; }

.shadow-light {
  box-shadow: 0 2px 6px #e6ecf1; }

.shadow-dark {
  box-shadow: 0 2px 6px #728394; }

.is-online {
  width: 10px;
  height: 10px;
  background-color: #63ed7a;
  border-radius: 50%;
  display: inline-block; }

.gutters-xs {
  margin-right: -0.25rem;
  margin-left: -0.25rem; }

.gutters-xs > .col,
.gutters-xs > [class*="col-"] {
  padding-right: 0.25rem;
  padding-left: 0.25rem; }

.beep {
  position: relative; }
  .beep:after {
    content: '';
    position: absolute;
    top: 2px;
    right: 8px;
    width: 7px;
    height: 7px;
    background-color: #ffa426;
    border-radius: 50%;
    animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
    opacity: 1; }
  .beep.beep-sidebar:after {
    position: static;
    margin-left: 10px; }

@media (max-width: 575.98px) {
  .fc-overflow {
    width: 100%;
    overflow: auto; }
    .fc-overflow #myEvent {
      width: 800px; }

  .ionicons li {
    width: calc(100% / 4); }

  .icon-wrap {
    width: 100%; } }
/* 4.2 Section */
.section {
  position: relative;
  z-index: 1; }
  .section > *:first-child {
    margin-top: -7px; }
  .section .section-header {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    background-color: #fff;
    border-radius: 3px;
    border: none;
    position: relative;
    margin-bottom: 30px;
    padding: 20px;
    display: flex;
    align-items: center; }
    .section .section-header h1 {
      margin-bottom: 0;
      font-weight: 700;
      display: inline-block;
      font-size: 24px;
      margin-top: 3px;
      color: #34395e; }
    .section .section-header .section-header-back {
      margin-right: 15px; }
      .section .section-header .section-header-back .btn:hover {
        background-color: #6777ef;
        color: #fff; }
    .section .section-header .section-header-button {
      margin-left: 20px; }
    .section .section-header .section-header-breadcrumb {
      margin-left: auto;
      display: flex;
      align-items: center; }
      .section .section-header .section-header-breadcrumb .breadcrumb-item {
        font-size: 12px; }
    .section .section-header .btn {
      font-size: 12px; }
  .section .section-title {
    font-size: 18px;
    color: #191d21;
    font-weight: 600;
    position: relative;
    margin: 30px 0 25px 0; }
    .section .section-title:before {
      content: ' ';
      border-radius: 5px;
      height: 8px;
      width: 30px;
      background-color: #6777ef;
      display: inline-block;
      float: left;
      margin-top: 6px;
      margin-right: 15px; }
  .section .section-title + .section-lead {
    margin-top: -20px; }
  .section .section-lead {
    margin-left: 45px; }

.main-wrapper-1 .section .section-header {
  margin-left: -30px;
  margin-right: -30px;
  margin-top: -10px;
  border-radius: 0;
  border-top: 1px solid #f9f9f9;
  padding-left: 35px;
  padding-right: 35px; }

@media (max-width: 575.98px) {
  .section .section-title {
    font-size: 14px; }
  .section .section-header {
    flex-wrap: wrap;
    margin-bottom: 20px !important; }
    .section .section-header h1 {
      font-size: 18px; }
    .section .section-header .float-right {
      display: inline-block;
      width: 100%;
      margin-top: 15px; }
    .section .section-header .section-header-breadcrumb {
      flex-basis: 100%;
      margin-top: 10px; } }
/* 4.3 Page */
.page-error {
  height: 100%;
  width: 100%;
  padding-top: 60px;
  text-align: center;
  display: table; }
  .page-error .page-inner {
    display: table-cell;
    width: 100%;
    vertical-align: middle; }
  .page-error h1 {
    font-size: 10em;
    font-weight: 700; }
  .page-error .page-description {
    font-size: 18px;
    font-weight: 400;
    color: #34395e; }
  .page-error .page-search {
    margin: 40px auto;
    max-width: 100%;
    width: 350px; }
    .page-error .page-search .form-control {
      border-radius: 30px; }
    .page-error .page-search .btn {
      border-radius: 30px;
      margin-left: 10px; }

@media (max-width: 575.98px) {
  .page-error .page-search {
    width: 100%; } }
/* 4.4 Layout */
.main-sidebar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  position: fixed;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #fff;
  z-index: 880;
  left: 0; }

.main-sidebar,
.navbar,
.main-content,
.main-footer {
  transition: all .5s; }

body.sidebar-gone .main-sidebar {
  left: -250px; }

body.sidebar-mini .hide-sidebar-mini {
  display: none !important; }
body.sidebar-mini .main-sidebar {
  width: 65px;
  overflow: initial !important;
  position: absolute;
  box-shadow: none; }
  body.sidebar-mini .main-sidebar:after {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    content: ' ';
    position: fixed;
    background-color: #fff;
    width: 65px;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
    animation-name: mini-sidebar;
    animation-duration: 1.5s;
    animation-fill-mode: forwards; }
@keyframes mini-sidebar {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }
  body.sidebar-mini .main-sidebar .sidebar-brand {
    display: none; }
  body.sidebar-mini .main-sidebar .sidebar-brand-sm {
    display: block; }
  body.sidebar-mini .main-sidebar .sidebar-menu > li {
    padding: 10px; }
    body.sidebar-mini .main-sidebar .sidebar-menu > li.menu-header {
      padding: 0;
      font-size: 0;
      height: 2px; }
    body.sidebar-mini .main-sidebar .sidebar-menu > li > a {
      border-radius: 3px;
      height: 45px;
      padding: 0;
      justify-content: center; }
      body.sidebar-mini .main-sidebar .sidebar-menu > li > a .ion, body.sidebar-mini .main-sidebar .sidebar-menu > li > a .fas, body.sidebar-mini .main-sidebar .sidebar-menu > li > a .far, body.sidebar-mini .main-sidebar .sidebar-menu > li > a .fab, body.sidebar-mini .main-sidebar .sidebar-menu > li > a .fal {
        margin: 0;
        font-size: 20px; }
      body.sidebar-mini .main-sidebar .sidebar-menu > li > a span {
        display: none; }
      body.sidebar-mini .main-sidebar .sidebar-menu > li > a .badge {
        padding: 5px;
        position: absolute;
        top: 4px;
        right: 4px;
        font-size: 10px; }
      body.sidebar-mini .main-sidebar .sidebar-menu > li > a.has-dropdown:after {
        content: initial; }
    body.sidebar-mini .main-sidebar .sidebar-menu > li.active > a {
      box-shadow: 0 4px 8px #acb5f6;
      background-color: #6777ef;
      color: #fff; }
    body.sidebar-mini .main-sidebar .sidebar-menu > li ul.dropdown-menu {
      position: absolute;
      background-color: #fff;
      left: 65px;
      top: 10px;
      width: 200px;
      display: none;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.03); }
      body.sidebar-mini .main-sidebar .sidebar-menu > li ul.dropdown-menu li > a:focus,
      body.sidebar-mini .main-sidebar .sidebar-menu > li ul.dropdown-menu li.active > a,
      body.sidebar-mini .main-sidebar .sidebar-menu > li ul.dropdown-menu li.active > a:hover {
        color: #fff;
        background-color: #6777ef !important; }
      body.sidebar-mini .main-sidebar .sidebar-menu > li ul.dropdown-menu li a {
        height: 40px;
        padding: 0 20px;
        background-color: #fff; }
        body.sidebar-mini .main-sidebar .sidebar-menu > li ul.dropdown-menu li a.has-dropdown:after {
          content: "";
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          position: absolute;
          top: 50%;
          right: 20px;
          -webkit-transform: translate(0, -50%);
          transform: translate(0, -50%);
          font-size: 12px; }
  body.sidebar-mini .main-sidebar .sidebar-menu li:hover > ul.dropdown-menu {
    display: block !important; }
    body.sidebar-mini .main-sidebar .sidebar-menu li:hover > ul.dropdown-menu li:hover > a {
      background-color: #fcfcfd; }
    body.sidebar-mini .main-sidebar .sidebar-menu li:hover > ul.dropdown-menu li .dropdown-menu {
      left: 200px;
      padding: 0; }
body.sidebar-mini .navbar {
  left: 65px; }
body.sidebar-mini .main-content, body.sidebar-mini .main-footer {
  padding-left: 90px; }

body.layout-2 .navbar-bg {
  z-index: 889;
  height: 70px; }
body.layout-2 .navbar {
  left: 0;
  z-index: 890; }
body.layout-2 .main-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px; }
body.layout-2 .main-sidebar,
body.layout-2 .main-content,
body.layout-2 .main-footer {
  flex-shrink: 0;
  flex-grow: 0; }
body.layout-2 .main-sidebar {
  background-color: transparent;
  box-shadow: none;
  position: static;
  margin-top: 100px;
  width: 200px; }
  body.layout-2 .main-sidebar .sidebar-menu li.menu-header {
    padding: 0; }
  body.layout-2 .main-sidebar .sidebar-menu li a {
    padding: 0; }
    body.layout-2 .main-sidebar .sidebar-menu li a i {
      width: 10px; }
    body.layout-2 .main-sidebar .sidebar-menu li a.has-dropdown:after {
      right: 0; }
    body.layout-2 .main-sidebar .sidebar-menu li a:hover {
      color: #6777ef;
      background-color: transparent; }
  body.layout-2 .main-sidebar .sidebar-menu li ul.dropdown-menu li a {
    padding-left: 34px; }
body.layout-2 .main-content {
  padding-top: 107px;
  padding-left: 30px;
  padding-right: 0;
  width: calc(100% - 200px); }
body.layout-2 .main-footer {
  margin-left: 230px;
  width: calc(100% - 230px);
  padding-left: 0;
  padding-right: 0; }

body.layout-3 .navbar {
  left: 0;
  right: 0; }
body.layout-3 .navbar.navbar-secondary {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  top: 70px;
  padding: 0;
  z-index: 889; }
  body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item.active > .nav-link {
    color: #6777ef; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item.active > .nav-link:before {
      left: 35px;
      right: 0; }
  body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item:first-child .nav-link {
    margin-left: 0; }
  body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item:last-child .nav-link {
    margin-right: 0; }
  body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link {
    color: #868e96;
    font-size: 13px;
    letter-spacing: .3px;
    height: 70px;
    padding: 0;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 15px;
    margin-right: 15px;
    position: relative; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link.has-dropdown {
      margin-right: 35px; }
      body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link.has-dropdown:after {
        content: "";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        position: absolute;
        top: 50%;
        right: 20px;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        font-size: 12px;
        right: -20px; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link:before {
      content: ' ';
      position: absolute;
      left: initial;
      right: initial;
      bottom: 0;
      height: 2px;
      background-color: #6777ef;
      transition: all .5s; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link span {
      line-height: 74px; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link i {
      width: 30px;
      font-size: 16px; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item > .nav-link:hover {
      color: #191d21 !important; }
  body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu {
    padding: 0; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu .nav-item .nav-link {
      color: #6c757d;
      font-weight: 600;
      letter-spacing: .3px;
      padding: 7px !important;
      padding-left: 20px !important;
      padding-right: 20px !important; }
      body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu .nav-item .nav-link.has-dropdown:after {
        content: "";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        position: absolute;
        top: 50%;
        right: 20px;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        font-size: 12px;
        right: 15px; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu .nav-item:hover > .nav-link {
      background-color: #fcfcfd;
      color: #191d21; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu .nav-item:hover > .dropdown-menu {
      display: block !important;
      top: -5px;
      left: 200px; }
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu .nav-item.active > .nav-link,
    body.layout-3 .navbar.navbar-secondary .navbar-nav > .nav-item .dropdown-menu .nav-item .nav-link:focus {
      background-color: #6777ef;
      color: #fff; }
body.layout-3 .main-content {
  padding-left: 0;
  padding-right: 0;
  padding-top: 170px; }
body.layout-3 .main-footer {
  padding-left: 0;
  padding-right: 0; }

.main-sidebar .sidebar-brand {
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 60px;
  line-height: 60px; }
  .main-sidebar .sidebar-brand.sidebar-brand-sm {
    display: none; }
  .main-sidebar .sidebar-brand a {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
    color: #000; }
.main-sidebar .sidebar-user {
  display: inline-block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px; }
  .main-sidebar .sidebar-user .sidebar-user-picture {
    float: left;
    margin-right: 10px; }
    .main-sidebar .sidebar-user .sidebar-user-picture img {
      width: 50px;
      border-radius: 50%; }
.main-sidebar .sidebar-menu {
  padding: 0;
  margin: 0; }
  .main-sidebar .sidebar-menu li {
    display: block; }
    .main-sidebar .sidebar-menu li.menu-header {
      padding: 3px 15px;
      color: #bcc1c6;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.3px;
      font-weight: 600; }
      .main-sidebar .sidebar-menu li.menu-header:not(:first-child) {
        margin-top: 10px; }
    .main-sidebar .sidebar-menu li a {
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 20px;
      width: 100%;
      letter-spacing: .3px;
      color: #868e96;
      text-decoration: none; }
      .main-sidebar .sidebar-menu li a .badge {
        float: right;
        padding: 5px 10px;
        margin-top: 2px; }
      .main-sidebar .sidebar-menu li a i {
        width: 28px;
        margin-right: 20px;
        text-align: center; }
      .main-sidebar .sidebar-menu li a span {
        margin-top: 3px;
        width: 100%; }
      .main-sidebar .sidebar-menu li a:hover {
        background-color: #fcfcfd; }
    .main-sidebar .sidebar-menu li.active a {
      color: #6777ef;
      font-weight: 600;
      background-color: #fcfcfd; }
    .main-sidebar .sidebar-menu li.active ul.dropdown-menu {
      background-color: #fcfcfd; }
    .main-sidebar .sidebar-menu li a.has-dropdown:after {
      content: "";
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      top: 50%;
      right: 20px;
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
      font-size: 12px; }
    .main-sidebar .sidebar-menu li.active > ul.dropdown-menu {
      display: block; }
      .main-sidebar .sidebar-menu li.active > ul.dropdown-menu li a:hover {
        background-color: #fcfcfd; }
    .main-sidebar .sidebar-menu li ul.dropdown-menu {
      padding: 0;
      margin: 0;
      display: none;
      position: static;
      float: none;
      width: 100%;
      box-shadow: none;
      background-color: transparent; }
      .main-sidebar .sidebar-menu li ul.dropdown-menu li a {
        color: #868e96;
        height: 35px;
        padding-left: 65px;
        font-weight: 400; }
        .main-sidebar .sidebar-menu li ul.dropdown-menu li a:hover {
          color: #6777ef;
          background-color: inherit; }
      .main-sidebar .sidebar-menu li ul.dropdown-menu li.active > a {
        color: #6777ef;
        font-weight: 600; }
      .main-sidebar .sidebar-menu li ul.dropdown-menu li a i {
        margin-top: 1px;
        text-align: center; }
      .main-sidebar .sidebar-menu li ul.dropdown-menu li ul.dropdown-menu {
        padding-left: 10px; }

.main-content {
  padding-left: 280px;
  padding-right: 30px;
  padding-top: 80px;
  width: 100%;
  position: relative; }

.main-footer {
  padding: 20px 30px 20px 280px;
  margin-top: 40px;
  color: #98a6ad;
  border-top: 1px solid #e3eaef;
  display: inline-block;
  width: 100%; }
  .main-footer .footer-left {
    float: left; }
  .main-footer .footer-right {
    float: right; }

.simple-footer {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px; }

body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active a {
  background-color: #6777ef;
  color: #fff; }
body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active ul.dropdown-menu li a {
  color: #e8ebfd; }
  body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active ul.dropdown-menu li a:hover {
    background-color: #6777ef;
    color: #fff; }
body:not(.sidebar-mini) .sidebar-style-1 .sidebar-menu li.active ul.dropdown-menu li.active a {
  color: #fff; }

body:not(.sidebar-mini) .sidebar-style-2 .sidebar-menu > li.active > a {
  padding-left: 16px;
  background-color: transparent;
  position: relative; }
  body:not(.sidebar-mini) .sidebar-style-2 .sidebar-menu > li.active > a:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 25px;
    width: 4px;
    background-color: #6777ef; }
body:not(.sidebar-mini) .sidebar-style-2 .sidebar-menu li.active ul.dropdown-menu li a {
  padding-left: 61px;
  background-color: #fff; }

@media (max-width: 1024px) {
  .sidebar-gone-hide {
    display: none !important; }

  .sidebar-gone-show {
    display: block !important; }

  .main-sidebar {
    position: fixed !important;
    margin-top: 0 !important;
    z-index: 891; }

  body.layout-2 .main-wrapper,
  body.layout-3 .main-wrapper {
    width: 100%;
    padding: 0;
    display: block; }

  .main-content {
    padding-left: 30px;
    padding-right: 30px;
    width: 100% !important; }

  .main-footer {
    padding-left: 30px; }

  body.search-show {
    overflow: hidden; }
    body.search-show .navbar {
      z-index: 892; }
  body.sidebar-show {
    overflow: hidden; }
  body.search-show:before, body.sidebar-show:before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    z-index: 891;
    -webkit-animation-name: fadeinbackdrop;
    animation-name: fadeinbackdrop;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards; }
  @-webkit-keyframes fadeinbackdrop {
    to {
      opacity: .6; } }
  @keyframes fadeinbackdrop {
    to {
      opacity: .6; } } }
/* 4.5 Animation */
.pulsate {
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 1; }

@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0; }
  50% {
    opacity: 1.0; }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0.0; } }

/*# sourceMappingURL=style.css.map */

`

;