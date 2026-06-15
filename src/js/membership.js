document.addEventListener("DOMContentLoaded", function () {

    const membershipTranslations = {

        en: {
            hero_title: "Join Our Mission",
            hero_desc: "Become a member of ECAO and contribute to sustainable development across Afghanistan.",
            personal_info: "Personal Information",
            education_title: "Education",
            address_title: "Address Information",
            application_title: "Application Details",
            full_name: "Full Name *",
            father_name: "Father's Name",
            tazkira: "ID / Tazkira Number",
            birth_date: "Date of Birth",
            email: "Email Address *",
            email_placeholder: "you@example.com",
            phone: "Phone Number *",
            whatsapp: "WhatsApp Number",
            education_level: "Education Level",
            select_level: "Select Level",
            high_school: "High School",
            bachelor: "Bachelor's Degree",
            master: "Master's Degree",
            phd: "PhD / Doctorate",
            vocational: "Vocational Training",
            other: "Other",
            graduation_year: "Graduation Year",
            permanent_address: "Permanent Address",
            current_address: "Current Address",
            reason_label: "Reason for Application",
            submit_btn: "Submit Application",
            cancel_btn: "Cancel",
            privacy_notice: "Privacy Notice: Your personal information will be used solely for membership evaluation. We do not share your data with third parties. By submitting this form, you agree to our Privacy Policy.",
            bottom_note: "All information provided is kept strictly confidential.",
            fullname_placeholder: "Ahmad Rahimi",
            father_placeholder: "Mohammad Rahimi",
            permanent_placeholder: "Full permanent address with province, district, village",
            current_placeholder: "Full current address",
            reason_placeholder: "Tell us why you would like to join ECAO and how you can contribute..."
        },

        fa: {
            hero_title: "به ماموریت ما بپیوندید",
            hero_desc: "عضو ECAO شوید و در توسعه پایدار در سراسر افغانستان مشارکت کنید.",
            personal_info: "اطلاعات شخصی",
            education_title: "تحصیلات",
            address_title: "اطلاعات آدرس",
            application_title: "جزئیات درخواست",
            full_name: "نام کامل *",
            father_name: "نام پدر",
            tazkira: "شماره تذکره",
            birth_date: "تاریخ تولد",
            email: "آدرس ایمیل *",
            email_placeholder: "شما@example.com",
            phone: "شماره تلفن *",
            whatsapp: "شماره واتساپ",
            education_level: "سطح تحصیلات",
            select_level: "انتخاب سطح",
            high_school: "لیسه",
            bachelor: "لیسانس",
            master: "ماستری",
            phd: "دکتورا",
            vocational: "آموزش حرفه‌ای",
            other: "سایر",
            graduation_year: "سال فراغت",
            permanent_address: "آدرس دایمی",
            current_address: "آدرس فعلی",
            reason_label: "دلیل درخواست",
            submit_btn: "ارسال درخواست",
            cancel_btn: "لغو",
            privacy_notice: "اطلاعیه حریم خصوصی: اطلاعات شخصی شما صرفاً برای ارزیابی عضویت استفاده خواهد شد. ما داده‌های شما را با اشخاص ثالث به اشتراک نمی‌گذاریم. با ارسال این فرم، شما با قوانین ما موافقت می‌کنید: خط‌مشی رازداری.",
            bottom_note: "تمام اطلاعات ارائه شده محرمانه نگه داشته می‌شود.",
            fullname_placeholder: "احمد رحیمی",
            father_placeholder: "محمد رحیمی",
            permanent_placeholder: "آدرس کامل دایمی با ولایت، ولسوالی، روستا",
            current_placeholder: "آدرس کامل فعلی",
            reason_placeholder: "به ما بگویید چرا میخواهید به ECAO بپیوندید و چگونه میتوانید کمک کنید..."
        }
    };

    function updateMembershipPage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (
                membershipTranslations[lang] &&
                membershipTranslations[lang][key]
            ) {
                el.textContent =
                    membershipTranslations[lang][key];
            }
        });

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(el => {
                const key =
                    el.getAttribute("data-i18n-placeholder");
                if (
                    membershipTranslations[lang] &&
                    membershipTranslations[lang][key]
                ) {
                    el.placeholder =
                        membershipTranslations[lang][key];
                }
            });
    }

    window.addEventListener(
        "languageChanged",
        function (e) {
            updateMembershipPage(
                e.detail.lang
            );
        }
    );

    const savedLang =
        localStorage.getItem("lang") || "en";
    updateMembershipPage(savedLang);

});

