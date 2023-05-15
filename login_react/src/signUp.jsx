import React, { useEffect, useState } from "react";

export default function SingUp() {
    const checkForm = () => {
        if (!document.newMember.id.value) {
            swal('회원정보 수정 실패!', "아이디를 입력하세요", 'warning');
            return false;
        }

        if (!document.newMember.password.value) {
            swal('회원정보 수정 실패!', "비밀번호를 입력하세요", 'warning');
            return false;
        }

        if (document.newMember.password.value != document.newMember.password_confirm.value) {
            swal('회원정보 수정 실패!', "비밀번호를 동일하게 입력하세요", 'warning');
            return false;
        }
    }

    return (
        <form name="newMember" class="form-horizontal" action="" method="post"
            onsubmit="return checkForm()">
            <header aria-label="Page Header">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="text-center sm:text-left">
                            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Join Us!
                            </h1>

                            <p class="mt-1.5 text-sm text-gray-500">
                                Like Lion 🎉
                            </p>
                        </div>

                        <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <input type="submit"
                                class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                value="submit ">
                            </input>
                        </div>
                    </div>
                </div>
            </header>

            <div class="container">
                <div class="form-group  row">
                    <label class="col-sm-2">id</label>
                    <div class="col-sm-3">
                        <input name="id" type="text" class="form-control" placeholder="id" />
                    </div>
                </div>
                <div class="form-group  row">
                    <label class="col-sm-2">password</label>
                    <div class="col-sm-3">
                        <input name="password" type="text" class="form-control" placeholder="password" />
                    </div>
                </div>
                <div class="form-group  row">
                    <label class="col-sm-2">check password</label>
                    <div class="col-sm-3">
                        <input name="password_confirm" type="text" class="form-control" placeholder="password confirm" />
                    </div>
                </div>
                <div class="form-group  row">
                    <label class="col-sm-2">name</label>
                    <div class="col-sm-3">
                        <input name="name" type="text" class="form-control" placeholder="name" />
                    </div>
                </div>
                <div class="form-group  row">
                    <label class="col-sm-2">gender</label>
                    <div class="col-sm-10">
                        <input name="gender" type="radio" value="남" /> male
                        <input name="gender" type="radio" value="여" /> female
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2">birthday</label>
                    <div class="col-sm-4  ">
                        <input type="text" name="birthyy" maxlength="4" placeholder="ex)2001" size="6" />
                        <select name="birthmm">
                            <option value="">month</option>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select> <input type="text" name="birthdd" maxlength="2" placeholder="day" size="4" />
                    </div>
                </div>
                <div class="form-group  row ">
                    <label class="col-sm-2">Email</label>
                    <div class="col-sm-10">
                        <input type="text" name="mail1" maxlength="50" />@
                        <select name="mail2">
                            <option>naver.com</option>
                            <option>daum.net</option>
                            <option>gmail.com</option>
                            <option>nate.com</option>
                        </select>
                    </div>
                </div>
                <div class="form-group  row">
                    <label class="col-sm-2">phone number</label>
                    <div class="col-sm-3">
                        <input name="phone" type="text" class="form-control" placeholder="phone number" />
                    </div>
                </div>
            </div>
        </form>
    );
}