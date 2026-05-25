class Application {
    constructor() {
        this.path = location.pathname;
        this.actions = {
            nextPage: this.nextPage,
            checkPolicy: this.checkPolicy
        };
        this.after();
    }

    after() {
        $(document).ready(function () {
            // Init datetime pickers
            $('.date').datetimepicker({
                format: 'DD.MM.YYYY HH:mm',
                useCurrent: false
            });


        });
    }

    nextPage() {
        let j_confirmPolicy = $('#confirmPolicy');
        let j_checkBox = $('#checkBox');
        let j_dateTime = $('#dateTime');
        let j_policyNumber = $('#policyNumber');

        if (j_confirmPolicy.parent().parent().hasClass('hidden')) {
            alert('Pentru a continua trebuie verificata polita.');
            return false;
        }

        if (!moment(j_dateTime.val(), 'DD.MM.YYYY HH:mm')._isValid) {
            alert('Pentru a continua trebuie completata data si ora producerii evenimentului.');
            return false;
        }

        if (!j_checkBox.prop('checked')) {
            alert('Pentru a continua trebuie sa fiti de acord cu prelucrarea datelor cu caracter personal.');
            return false;
        }

        let splitedPath = window.location.pathname.split('/');
        splitedPath[splitedPath.length - 1] = 'form.php';
        let url = splitedPath.join('/');

        if (j_policyNumber.val() !== '') {
            url += `?policyNumber=${j_policyNumber.val()}`;
        }

        if (j_dateTime.val() !== '') {
            let isoDate = moment(j_dateTime.val(), 'DD.MM.YYYY HH:mm').toISOString();
            url += `&eventDate=${isoDate}`;
        }

        window.location = url;
    };

    checkPolicy() {
        let policyNumber = $('#policyNumber').val();
        let j_confirmPolicy = $('#confirmPolicy');
        let j_eventDate = $('#dateTime');
        let eventDate = moment(j_eventDate.val(), 'DD.MM.YYYY HH:mm').local().format('YYYY-MM-DD HH:mm:ss');
        let j_submitBtn = $('#submitBtn');
        let j_blockUI = $('#cloud--page-blockUI');

        j_blockUI.show();

        setTimeout(() => {
            $.ajax({
                method: 'POST',
                url: 'index.php?request=checkPolicy',
                data: {
                    policyNumber: policyNumber,
                    eventDate: eventDate
                },
                async: false
            }).done(function (data) {
                $('#cloud--page-blockUI').hide();

                setTimeout(() => {
                    let responseData = JSON.parse(data);

                    if (responseData.status && responseData.data && responseData.data === true) {
                        j_confirmPolicy.text(`
                Polita de asigurare RCA nr. ${policyNumber} exista in baza de date Watford si este valabila la momentul accidentului. Va rugam sa continuati completarea avizarii daunei.
                `);

                        j_submitBtn.attr('disabled', false);
                        j_confirmPolicy.parent().parent().removeClass('hidden');
                    } else {
                        j_submitBtn.attr('disabled', true);
                        j_confirmPolicy.parent().parent().addClass('hidden');

                        setTimeout(() => {
                            alert(responseData.data);
                        }, 100);
                    }
                }, 100);
            });
        }, 100);
    };
}

window.App = new Application();
