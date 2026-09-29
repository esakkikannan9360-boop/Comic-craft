document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeComicForm();

        initializeFeedbackForm();

    }
);


/* =====================================================
   Comic Creation Form
   ===================================================== */

function initializeComicForm() {

    const form =
        document.getElementById(
            "comic-form"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            const title =
                document.getElementById(
                    "title"
                ).value.trim();

            const character =
                document.getElementById(
                    "character_description"
                ).value.trim();

            const story =
                document.getElementById(
                    "story_idea"
                ).value.trim();

            const panelCount =
                Number(
                    document.getElementById(
                        "panel_count"
                    ).value
                );


            if (title.length < 2) {

                event.preventDefault();

                alert(
                    "Please enter a comic title."
                );

                return;
            }


            if (character.length < 10) {

                event.preventDefault();

                alert(
                    "Please provide a more detailed character description."
                );

                return;
            }


            if (story.length < 10) {

                event.preventDefault();

                alert(
                    "Please provide a more detailed story idea."
                );

                return;
            }


            if (
                panelCount < 2 ||
                panelCount > 12
            ) {

                event.preventDefault();

                alert(
                    "Panel count must be between 2 and 12."
                );

                return;
            }


            const loading =
                document.getElementById(
                    "loading"
                );


            if (loading) {

                loading.classList.remove(
                    "hidden"
                );

            }


            const button =
                form.querySelector(
                    "button[type='submit']"
                );


            if (button) {

                button.disabled = true;

                button.textContent =
                    "Creating Comic...";

            }

        }
    );
}


/* =====================================================
   Feedback Form
   ===================================================== */

function initializeFeedbackForm() {

    const form =
        document.querySelector(
            "form[action='/feedback']"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            const textarea =
                form.querySelector(
                    "textarea"
                );


            if (
                !textarea ||
                textarea.value.trim().length < 3
            ) {

                event.preventDefault();

                alert(
                    "Please enter useful feedback."
                );

            }

        }
    );
}


/* =====================================================
   Copy Script
   ===================================================== */

function copyScript() {

    const element =
        document.getElementById(
            "comic-script"
        );


    if (!element) {

        alert(
            "Comic script not found."
        );

        return;
    }


    const text =
        element.innerText;


    navigator.clipboard
        .writeText(text)
        .then(
            function () {

                alert(
                    "Comic script copied!"
                );

            }
        )
        .catch(
            function () {

                alert(
                    "Unable to copy the script."
                );

            }
        );
}
