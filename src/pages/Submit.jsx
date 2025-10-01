import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../components/Footer";

export default function Submit() {
    const [needsProsthesis, setNeedsProsthesis] = useState("");
    const [amputationLevel, setAmputationLevel] = useState("");
    const [amputationError, setAmputationError] = useState("");
    const [captchaError, setCaptchaError] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || "ab3037ad-c5c7-43c8-a689-328eb65e6018";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAmputationError("");
        setCaptchaError("");

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if ((needsProsthesis === "yes" || needsProsthesis === "no_know") && !amputationLevel) {
            setAmputationError("Пожалуйста, выберите уровень ампутации");
            return;
        }

        // reCAPTCHA temporarily optional: do not block submission if token is missing

        const firstName = form.elements["first-name"].value.trim();
        const lastName = form.elements["last-name"].value.trim();
        const email = form.elements["email"].value.trim();
        const comment = form.elements["comment"].value.trim();

        const subject = `Заявка на тестирование прототипов от ${firstName} ${lastName}`;
        const bodyLines = [
            `Имя: ${firstName}`,
            `Фамилия: ${lastName}`,
            `Email: ${email}`,
            `Требуется протез: ${needsProsthesis === "yes" ? "Да (ампутация или дисмелия)" : needsProsthesis === "no_know" ? "Нет, но я знаю кому требуется" : "Нет, хочу оставить комментарий"}`,
            (needsProsthesis === "yes" || needsProsthesis === "no_know") && amputationLevel ? `Уровень ампутации: ${amputationLevel === "forearm" ? "Предплечье" : "Плечо"}` : null,
            comment ? `Комментарий: ${comment}` : null,
        ].filter(Boolean);

        if (web3FormsKey) {
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        access_key: web3FormsKey,
                        to: "artevoteam@gmail.com",
                        subject,
                        from_name: `${firstName} ${lastName}`,
                        from_email: email,
                        reply_to: email,
                        message: bodyLines.join("\n"),
                        needs_prosthesis: needsProsthesis,
                        amputation_level: amputationLevel,
                    })
                });
                const result = await response.json();
                if (result.success) {
                    alert("Заявка успешно отправлена! Мы свяжемся с вами по Email.");
                    form.reset();
                    setNeedsProsthesis("");
                    setAmputationLevel("");
                    setRecaptchaToken("");
                } else {
                    alert("Не удалось отправить заявку. Попробуйте позже.");
                }
                return;
            } catch (err) {
                alert("Ошибка сети при отправке заявки. Попробуйте позже.");
                return;
            }
        }

        const mailto = `mailto:artevoteam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
        window.location.href = mailto;
    };
    return (
        <div>
            <section className="pt-32 pb-24 bg-primary min-h-screen flex items-center">
                <div className="container mx-auto px-4 flex flex-col w-full">
                    <h3 className="font-primary text-2xl font-normal text-white mb-16 text-center">
                        ХОТИТЕ ПРИНЯТЬ УЧАСТИЕ В ТЕСТИРОВАНИИ ПРОТОТИПОВ?
                        <br />
                        <span className="font-primary text-2xl font-normal text-hover">
                            ОСТАВЬТЕ ЗАЯВКУ!
                        </span>
                    </h3>
                    <form className="bg-second w-full max-w-2xl self-center px-10 py-10 shadow-2xl rounded-4xl" onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-row justify-center space-x-25 space-y-4">
                            {/* Отступ между полями */}
                            <div className="w-1/2">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium font-primary mb-1"
                                >
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    placeholder="Введите здесь свое имя"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                    required
                                    pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                                    title="Только русские/английские буквы, пробел и дефис"
                                    maxLength={50}
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="last-name"
                                    className="block text-base font-medium font-primary mb-1"
                                >
                                    Фамилия
                                </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Введите здесь свою фамилию"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                    required
                                    pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                                    title="Только русские/английские буквы, пробел и дефис"
                                    maxLength={50}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mb-4">
                            {/* Отступ между полями */}
                            <div className="w-full">
                                <label
                                    htmlFor="email"
                                    className="block text-base font-primary font-medium mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Введите здесь свой Email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                    required
                                    maxLength={100}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mb-4">
                            {/* Отступ между полями */}
                            <div className="w-full">
                                <label
                                    htmlFor="needs-prosthesis"
                                    className="block text-base font-primary font-medium mb-1"
                                >
                                    Вам требуется протез?
                                </label>
                                <div id="needs-prosthesis" className="flex flex-col space-y-2">
                                    <label className="inline-flex items-center space-x-2 font-primary">
                                        <input type="radio" name="needs-prosthesis" value="yes" required onChange={(e) => { setNeedsProsthesis(e.target.value); }} />
                                        <span>Да (ампутация или дисмелия)</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-2 font-primary">
                                        <input type="radio" name="needs-prosthesis" value="no_know" onChange={(e) => { setNeedsProsthesis(e.target.value); }} />
                                        <span>Нет, но я знаю кому требуется</span>
                                    </label>
                                    <label className="inline-flex items-center space-x-2 font-primary">
                                        <input type="radio" name="needs-prosthesis" value="no_comment" onChange={(e) => { setNeedsProsthesis(e.target.value); setAmputationLevel(""); }} />
                                        <span>Нет, хочу оставить комментарий</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {(needsProsthesis === "yes" || needsProsthesis === "no_know") && (
                            <div className="flex flex-row justify-center mb-2">
                                {/* Отступ между полями */}
                                <div className="w-full">
                                    <label
                                        htmlFor="amputation-level"
                                        className="block text-base font-primary font-medium mb-3"
                                    >
                                        Выберите уровень ампутации*
                                    </label>
                                    <div id="amputation-level" className="flex items-center space-x-4">
                                        <button
                                            type="button"
                                            onClick={() => setAmputationLevel("forearm")}
                                            className={`border border-gray-300 rounded-md w-1/2 py-2 font-primary transition-colors ${amputationLevel === "forearm" ? "bg-hover text-black border-hover" : "bg-transparent hover:border-hover"}`}
                                            aria-pressed={amputationLevel === "forearm"}
                                        >
                                            Предплечье
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setAmputationLevel("shoulder")}
                                            className={`border border-gray-300 rounded-md w-1/2 py-2 font-primary transition-colors ${amputationLevel === "shoulder" ? "bg-hover text-black border-hover" : "bg-transparent hover:border-hover"}`}
                                            aria-pressed={amputationLevel === "shoulder"}
                                        >
                                            Плечо
                                        </button>
                                    </div>
                                    {amputationError && (
                                        <p className="text-red-400 text-sm mt-2 font-primary">{amputationError}</p>
                                    )}
                                </div>
                            </div>
                        )}
                        {captchaError && (
                            <p className="text-red-400 text-sm mt-2 font-primary">{captchaError}</p>
                        )}
                        <div className="flex flex-row justify-center mb-4">
                            {/* <div className="w-full">
                                <ReCAPTCHA
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LddVsYrAAAAAEKzjrw2CWz6SWQAm9RPKt0IBiUr"}
                                    onChange={(token) => setRecaptchaToken(token || "")}
                                    theme="dark"
                                />
                            </div> */}
                        </div>
                        <div className="flex flex-row justify-center mb-4">
                            <div className="w-full">
                                <label
                                    htmlFor="comment"
                                    className="block text-base font-primary font-medium mb-1"
                                >
                                    Комментарий
                                </label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    placeholder="Оставьте ваш комментарий (необязательно)"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-hover font-primary"
                                    rows={4}
                                    maxLength={500}
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-white text-black font-primary py-2 rounded-md hover:bg-hover">Отправить</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}
