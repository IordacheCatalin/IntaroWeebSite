
class Application {
    constructor() {
        this.path = location.pathname;
        this.actions = {
            appendDamageLocalization: this.appendDamageLocalization,
            removeDamageLocalization: this.removeDamageLocalization,
            formSubmit: this.formSubmit,
            backAction: this.backAction,
            modalOkAction: this.modalOkAction,
        };
        this.params = window.getParams;
        this.case = '';
        this.caseCompletion = [];
        this.after();
    }

    after() {
        let self = this;

        $(document).ready(function () {
            $("form").submit(function (e) {
                e.preventDefault();
            });

			self.appendCountries(['pas2country']);
            self.appendCounties(['pas2county', 'pas6county', 'pas7county', 'pas9county', 'pas11county']);
            self.appendBrands(['pas3brand']);
			self.appendInsuranceCompanies(['pas1cascocompany']);
            self.countyOnChange('pas2county', 'pas2locality');
            self.countyOnChange('pas6county', 'pas6locality');
            self.countyOnChange('pas7county', 'pas7locality');
            self.countyOnChange('pas9county', 'pas9locality');
			self.countyOnChange('pas11county', 'pas11locality');
            self.brandOnChange('pas3brand', 'pas3model');
            self.yearSelectInit('pas3year');
            self.injuredPersonsOnChange('number_injured_people');
            self.deadPersonsOnChange('number_dead_people');

            // Init datetime pickers
            $('.date').datetimepicker({
                format: 'DD.MM.YYYY',
                useCurrent: false
            });

            self.step1After();
            self.step2After();
			self.step3After();
            // self.step4After();
            self.step6After();
            self.step7After();
            self.step8After();
            self.step10After();
			self.step11After();

            self.majorSteps();

            $('select[name="event_information/car_damage_parts/1/parts"]')
			.add($('select[name="event_information/car_damage_parts/2/parts"]'))
			.add($('select[name="event_information/car_damage_parts/3/parts"]'))
			.add($('select[name="event_information/car_damage_parts/4/parts"]'))
			.find('option').mousedown(function (e) {
                e.preventDefault();
                $(this).prop('selected', !$(this).prop('selected'));
                return false;
            });
			
            $('input[name="event_information/car_damage_parts/1/side"]').val('Stanga');
            $('input[name="event_information/car_damage_parts/2/side"]').val('Dreapta');
            $('input[name="event_information/car_damage_parts/3/side"]').val('Central');
            $('input[name="event_information/car_damage_parts/4/side"]').val('Mecanica');
            $('input[name="event_information/car_damage_parts/5/side"]').val('Alte repere');
			
        });
    }
	
    appendCountries(elementsIds) {
        $.ajax({
            method: 'POST',
            url: 'index.php?request=getCountries',
        }).done(function (data) {
            let response = JSON.parse(data);

            if (!response || !response.status) {
                return false;
            }

            let countries = response.data;

            elementsIds.forEach(function (elementId) {
                let j_element = $(`#${elementId}`);

                countries.forEach(function (country) {
                    let html = `<option value="${country}">${country}</option>`;
                    j_element.append(html);
                });
            });
        });
    }	

    appendCounties(elementsIds) {
        $.ajax({
            method: 'POST',
            url: 'index.php?request=getCounties',
        }).done(function (data) {
            let response = JSON.parse(data);

            if (!response || !response.status) {
                return false;
            }

            let counties = response.data;

            elementsIds.forEach(function (elementId) {
                let j_element = $(`#${elementId}`);

                counties.forEach(function (county) {
                    let html = `<option value="${county}">${county}</option>`;
                    j_element.append(html);
                });
            });
        });
    }

    appendBrands(elementsIds) {
        $.ajax({
            method: 'POST',
            url: 'index.php?request=getBrands',
        }).done(function (data) {
            let response = JSON.parse(data);

            if (!response || !response.status) {
                return false;
            }

            let brands = response.data;

            elementsIds.forEach(function (elementId) {
                let j_element = $(`#${elementId}`);

                brands.forEach(function (brand) {
                    let html = `<option value="${brand}">${brand}</option>`;
                    j_element.append(html);
                });
            });
        });
    }

    appendInsuranceCompanies(elementsIds) {
        $.ajax({
            method: 'POST',
            url: 'index.php?request=getInsuranceCompanies',
        }).done(function (data) {
            let response = JSON.parse(data);

            if (!response || !response.status) {
                return false;
            }

            let companies = response.data;

            elementsIds.forEach(function (elementId) {
                let j_element = $(`#${elementId}`);

                companies.forEach(function (company) {
                    let html = `<option value="${company}">${company}</option>`;
                    j_element.append(html);
                });
				
				let html = `<option value="other">Alta companie</option>`;
                j_element.append(html);
            });
        });
    }

    countyOnChange(countyId, localityId) {
        let j_county = $(`#${countyId}`);
        let j_locality = $(`#${localityId}`);

        j_county.change(function () {
            let value = encodeURIComponent($(this).val());
            let pleaseSelectOption = '<option value="" selected="">Selecteaza optiunea</option>';

            $.ajax({
                method: 'POST',
                url: 'index.php?request=getLocalities',
                data: {
                    county: value
                }
            }).done(function (data) {
                let response = JSON.parse(data);

                if (!response || !response.status) {
                    return false;
                }

                let localities = response.data;

                j_locality.empty().append(pleaseSelectOption);

                localities.forEach(function (locality) {
                    j_locality.append(`<option value="${locality}">${locality}</option>`);
                });
            });
        });
    }

    brandOnChange(brandId, modelId) {
        let j_brand = $(`#${brandId}`);
        let j_model = $(`#${modelId}`);

        j_brand.change(function () {
            let value = encodeURIComponent($(this).val());
            let pleaseSelectOption = '<option value="" selected="">Selecteaza optiunea</option>';

            $.ajax({
                method: 'POST',
                url: 'index.php?request=getModels',
                data: {
                    brand: value
                }
            }).done(function (data) {
                let response = JSON.parse(data);

                if (!response || !response.status) {
                    return false;
                }

                let models = response.data;

                j_model.empty().append(pleaseSelectOption);

                models.forEach(function (model) {
                    j_model.append(`<option value="${model}">${model}</option>`);
                });
            });
        });
    }

    injuredPersonsOnChange(elementId) {
        function getHtml(personNumber) {
            return `
                <div class="row" id="injured_person${personNumber}">
                    <div class="col-lg-1 col-md-1 col-xs-1 list-number">${personNumber})</div>
                    <div class="col-lg-3 col-md-3 col-xs-3">
                        <div class="form-group">
                            <label for="event_information/injured_persons/injured/${personNumber}/firstname">Nume:</label>
                            <input placeholder="Nume" name="event_information/injured_persons/injured/${personNumber}/firstname" type="text"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-3">
                        <div class="form-group">
                            <label for="event_information/injured_persons/injured/${personNumber}/lastname">Prenume:</label>
                            <input placeholder="Prenume" name="event_information/injured_persons/injured/${personNumber}/lastname" type="text"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-xs-4">
                        <div class="form-group">
                            <label for="event_information/injured_persons/injured/${personNumber}/CNP">CNP:</label>
                            <input placeholder="CNP" name="event_information/injured_persons/injured/${personNumber}/CNP" type="text"
                                   class="form-control" pattern="\b[1-8]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)\d{4}\b">
                        </div>
                    </div>					
                </div>
            `;
        }

        let j_element = $(`#${elementId}`);
        let j_target = $(`#divpas8injuredPersons`);

        j_element.change(function () {
            let elementValue = Number($(this).val());
            let currentPersons = j_target.children().length;

            if (elementValue < currentPersons) {
                for (let i = elementValue + 1; i <= currentPersons; i++) {
                    $(`#injured_person${i}`).remove();
                }
            }

            for (let i = currentPersons + 1; i <= elementValue; i++) {
                j_target.append(getHtml(i));
            }
        });
    }

    deadPersonsOnChange(elementId) {
        function getHtml(personNumber) {
            return `
                <div class="row" id="dead_person${personNumber}">
                    <div class="col-lg-1 col-md-1 col-xs-1 list-number">${personNumber})</div>
                    <div class="col-lg-5 col-md-5 col-xs-5">
                        <div class="form-group">
                            <label for="event_information/injured_persons/dead/${personNumber}/firstname">Nume:</label>
                            <input placeholder="Nume" name="event_information/injured_persons/dead/${personNumber}/firstname" type="text"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-xs-5">
                        <div class="form-group">
                            <label for="event_information/injured_persons/dead/${personNumber}/lastname">Prenume:</label>
                            <input placeholder="Prenume" name="event_information/injured_persons/dead/${personNumber}/lastname" type="text"
                                   class="form-control">
                        </div>
                    </div>
                </div>
            `;
        }

        let j_element = $(`#${elementId}`);
        let j_target = $(`#divpas8deadPersons`);

        j_element.change(function () {
            let elementValue = Number($(this).val());
            let currentPersons = j_target.children().length;

            if (elementValue < currentPersons) {
                for (let i = elementValue + 1; i <= currentPersons; i++) {
                    $(`#dead_person${i}`).remove();
                }
            }

            for (let i = currentPersons + 1; i <= elementValue; i++) {
                j_target.append(getHtml(i));
            }
        });
    }

    yearSelectInit(elementId) {
        let j_element = $(`#${elementId}`);
        let year = moment().year();

        for (let i = year; i >= 1900; i--) {
            j_element.append(`<option value="${i}">${i}</option>`);
        }

    }

    appendDamageLocalization() {
        let j_parent = $('#pas4');
        let elementsCount = j_parent.children().length;
        let html = `
            <div class="row" id="localizareAvarie${elementsCount + 1}">
            <hr>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <div class="form-group">
                        <label for="pas4stareVehicul">Masina:</label>
                        <select class="form-control parent-select" name="event_information/car_damage_parts/${elementsCount + 1}/side">
                            <option value="" selected>Selecteaza optiunea</option>
                            <option value="Stanga">Stanga</option>
                            <option value="Dreapta">Dreapta</option>
                            <option value="Central">Central</option>
                            <option value="Mecanica">Mecanica</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12" style="display: none;">
                    <div class="form-group">
                        <label for="event_information/car_damage_parts/${elementsCount + 1}/parts">Repere masina:</label>
                        <select multiple class="form-control" style="height: 150px;" name="event_information/car_damage_parts/${elementsCount + 1}/parts">
                            <option value="Far">Far</option>
                            <option value="Aripa fata">Aripa fata</option>
                            <option value="Portiera fata">Portiera fata</option>
                            <option value="Oglinda retrovizoare">Oglinda retrovizoare</option>
                            <option value="Portiera spate">Portiera spate</option>
                            <option value="Prag">Prag</option>
                            <option value="Aripa spate">Aripa spate</option>
                            <option value="Stop">Stop</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12" style="display: none;">
                    <div class="form-group">
                        <label for="event_information/car_damage_parts/${elementsCount + 1}/other_parts">Alte repere:</label>
                        <textarea name="event_information/car_damage_parts/${elementsCount + 1}/other_parts" class="form-control"
                                  placeholder="Repere" style="height: 150px;"></textarea>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <div class="form-group margin-top">
                        <button type="button" class="btn btn-default" onclick="App.actions.removeDamageLocalization(this)"><span class="glyphicon glyphicon-trash"></span></button>
                        <button type="button" class="btn btn-default" onclick="App.actions.appendDamageLocalization()"><span class="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
            </div>
        `;

        j_parent.append(html);
    }

    removeDamageLocalization(element) {
        $(element).closest('.row').remove();
    }

    returnMessage(type, modalFileNumber, firstname, lastname) {
        var msg = '';
        switch (type) {
            case 1:
            msg =
                '<h3 style="border-bottom: 1px solid #000;">Notificare</h3>' +
                '<p>Vă mulţumim!</p>' +
                '<p>Notificarea daunei s-a finalizat cu succes, iar numărul de notificare alocat cazului dvs. este: <strong>' + modalFileNumber + '</strong>.</p>' +
                '<p>În cel mai scurt timp (max. 48 ore), d-nul/d-na ' + firstname + ' ' + lastname + ' va fi contactat/ă de către un specialist constatare daune pentru a stabili data, ora si locul unde va avea loc constatarea avariilor şi colectarea următoarelor documente necesare instrumentării dosarului de daună:</p>' +
                '<p><strong><u>Obligatorii:</u></strong></p>' +
                '<ul>' +
                    '<li><strong>Actul de identitate al păgubitului sau reprezentantului acestuia (C.I./B.I.)</strong> – original;</li>'+
                    '<li><strong>Permisul de conducere al şoferului păgubit</strong> (dacă vehiculul era condus la momentul evenimentului) - original;</li>'+
                    '<li><strong>Certificatul de înmatriculare (talon) sau cartea de identitate a autovehiculului păgubit</strong> – original.</li>'+
                '</ul>' +
                '<p><strong><u>Specifice cazului:</u></strong></p>' +
                '<ul>' +
                    '<li><strong>Actul de identitate (C.I./B.I.) şi permisul şoferului vinovat</strong> (dacă este posibil) – copie;</li>'+
                    '<li><strong>Certificatul de înmatriculare al vehiculului vinovat</strong> – copie.</li>'+
                    '<li><strong>Poliţa de asigurare obligatorie RCA a vehiculului vinovat</strong> (sau cel puţin dovada existenţei acesteia) – copie;</li>'+
                    '<li><strong>Constatarea Amiabilă de Accident sau documentul emis de către autorităţi (P.V. Poliţie, Anexa 2, etc.)</strong> – original;</li>'+
                    '<li><strong>Împuternicirea de reprezentare (PJ)/procura notarială (PF)</strong>, în cazul în care şoferul care se prezintă la constatare nu este proprietarul vehiculului avariat – original.</li>'+
                '</ul>' +
                '<p><strong><u>Alte documente/date:</u></strong></p>' +
                '<p>Pe parcursul instrumentării, în funcţie de conţinutul documentelor prezentate, se pot solicita păgubitului şi <strong>alte documente</strong>, pentru completarea dosarului de daună:</p>' +
                '<ul>' +
                    '<li><strong>declaraţii suplimentare şi/sau schiţa accidentului;</strong></li>'+
                    '<li><strong>documente care atestă dreptul de proprietate asupra vehiculului</strong>, în cazul în care acesta nu este înmatriculat/înregistrat fiscal de către noul proprietar;</li>'+
                    '<li><strong>fotografii ale autovehiculului avariat;</strong></li>'+
                    '<li><strong>copii paşaport</strong>, etc.</li>'+
                '</ul>' +
                '<p><strong>Pentru instrumentarea dosarului de daună, Watford Insurance Company Europe – Sucursala Bucureşti poate solicita, de la caz la caz, documente suplimenta</strong></p>' +
                '<p><strong>În cazul protocolării cazului pe baza Constatării Amiabile de Accident, se recomandă prezenţa la constatare a ambilor conducători şi a ambelor autovehicule implicate în evenimentul rutier.</strong></p>';
                break;
            case 2:
            msg =
                '<h3 style="border-bottom: 1px solid #000;">Notificare</h3>' +
                '<p>Vă mulţumim!</p>' +
                '<p>Notificarea daunei s-a finalizat cu succes, iar numărul de notificare alocat cazului dvs. este: <strong>' + modalFileNumber + '</strong>.</p>' +
                '<p>În cel mai scurt timp (max. 48 ore), d-nul/d-na ' + firstname + ' ' + lastname + ' va fi contactat/ă de către un reprezentant Watford pentru colectarea următoarelor documente necesare deschiderii și instrumentării dosarului de daună:</p>' +
                '<ul>' +
                    '<li>' +
                        '<strong><u>De la Autorul Accidentului:</u></strong>' +
                        '<ul>' +
                            '<li><strong>Poliţa de asigurare obligatorie RCA a vehiculului vinovat</strong> (sau cel puţin dovada existenţei acesteia) – copie;</li>' +
                            '<li><strong>Actul de identitate (C.I./B.I.) şi permisul şoferului vinovat</strong> (dacă este posibil) – copie;</li>' +
                            '<li><strong>Certificat de înmatriculare al vehiculului vinovat</strong> – copie.</li>' +
                        '</ul>' +
                    '</li>' +

                    '<li>' +
                        '<strong><u>De la Autorităţi:</u></strong>' +
                        '<ul>' +
                            '<li><strong>Documente emise de către autorităţile publice competente</strong> (Politie, IGSU, etc.) privind circumstanţele in care a avut loc evenimentul - original;</li>' +
                            '<li>După caz, <strong>adeverinţa medicală</strong> eliberată de organul medical care a acordat primul ajutor sau <strong>declaraţia scrisă a Asiguratului</strong>, probată cu martori sau alte documente justificative - original.</li>' +
                        '</ul>' +
                    '</li>' +

                    '<li>' +
                        '<strong><u>De la VICTIMĂ:</u></strong>' +
                        '<ul>' +
                            '<li><strong>Carte de identitate (buletin); Certificat de naștere; Certificat de căsătorie; Certificat de naștere copii/persoane în întreținere</strong> - copii;</li>' +
                            '<li><strong>Certificat medico-legal</strong> sau <strong>raport de constatarea medico-legală</strong> sau <strong>expertiză medico-legală</strong> cu numărul de zile de îngrijiri medicale - original;</li>' +
                            '<li><strong>Bilete de ieșire din spital</strong> (epicriză, concluzii, recomandări) - original; </li>' +
                            '<li><strong>Carte de muncă, concedii medicale, adeverință cu ultimul salariu/venit înainte de accident, adeverință cu venitul pe perioada concediului medical</strong> - copii;</li>' +
                            '<li><strong>Ofertă de preț pentru viitoarele intervenții chirurgicale și recuperări, în concordanță cu recomandările medicilor</strong> - copii;</li>' +
                            '<li><strong>Reţete, bonuri fiscale, note de plata, chitanțe, facturi cu cheltuielile specifice (medicamente, analize medicale, proteze, RMN, CT, etc.)</strong> - original;</li>' +
                            '<li><strong>Dacă este consolidată starea de sănătate sau gradul de invaliditate</strong> (act de la Comisia medicală de stabilire a gradului de handicap) - original;</li>' +
                            '<li><strong>Dacă primește pensie de boală – declaraţie;</strong></li>' +
                            '<li><strong>Declaraţia de mână (olografă)</strong> în amănunt privind cauzele şi împrejurările evenimentului, a persoanelor implicate, a autorului/autorilor prezumtivi, detalii despre numărul de înmatriculare al vehiculului vinovat, locul şi ora evenimentului, referinţe despre centurile de siguranţă, dacă s-au încasat bani de la persoana vinovată, etc.;</li>' +
                            '<li><strong>Descrierea în amănunt a urmărilor medicale, a traumelor fizice și psihice suferite;</strong></li>' +
                            '<li><strong>Actul medical întocmit in condiţiile legii care atesta gradul de invaliditate permanenta posttraumatica</strong> - original;</li>' +
                            '<li><strong>Cerere de despăgubire</strong>, împărţita în daune morale si/sau daune materiale, pe baza documentelor de cost pe care le are solicitantul pentru eveniment.</li>' +
                        '</ul>' +
                    '</li>' +

                    '<li>' +
                        '<strong><u>De la persoane în întreținere în caz de invaliditate a victimei:</u></strong>' +
                        '<ol type="A">' +
                            '<li><strong>Soț/soție</strong> – CI, Certificat de naștere, certificate de căsătorie, carte de muncă sau cupon de pensie/decizie de pensionare, adeverință de ajutor social, handicap – după caz;</li>' +
                            '<li><strong>Copil</strong> – certificat de naștere, CI (dacă are peste 14 ani), adeverință de elev/student, documente medicale, alte nevoi speciale – după caz;</li>' +
                            '<li><strong>tată/mamă</strong> – certificat de naștere, CI, certificat de căsătorie, dacă se afla în întreținerea victimei, adeverință privind starea de sănătate și efectele psihofizice – dacă este cazul;</li>' +
                        '</ol>' +
                    '</li>' +
                '</ul>' +
                '<p><strong>Pentru instrumentarea dosarului de daună, Watford Insurance Company Europe – Sucursala Bucureşti poate solicita, de la caz la caz, documente suplimentare.</strong></p>' +
                '<p><strong>În cazul protocolării cazului pe baza Constatării Amiabile de Accident, se recomandă prezenţa la constatare a ambilor conducători şi a ambelor autovehicule implicate în evenimentul rutier.</strong></p>';
                break;
            case 3:
            msg =
                '<h3 style="border-bottom: 1px solid #000;">Notificare</h3>' +
                '<p>Vă mulţumim!</p>' +
                '<p>Notificarea daunei s-a finalizat cu succes, iar numărul de notificare alocat cazului dvs. este: <strong>' + modalFileNumber + '</strong>.</p>' +
                '<p>În cel mai scurt timp (max. 48 ore), d-nul/d-na ' + firstname + ' ' + lastname + ' va fi contactat/ă de către un reprezentant Watford pentru colectarea următoarelor documente necesare deschiderii și instrumentării dosarului de daună:</p>' +
                '<ul>' +
                    '<li><strong>Poliţa de asigurare obligatorie RCA a vehiculului vinovat</strong> (sau cel puţin dovada existenţei acesteia) – copie;</li>'+
                    '<li><strong>Actul de identitate (C.I./B.I.) şi permisul şoferului vinovat</strong> (dacă este posibil) – copie;</li>'+
                    '<li><strong>Certificat de înmatriculare al vehiculului vinovat</strong> – copie;</li>'+
                    '<li><strong>Actul de identitate al beneficiarului poliţei</strong> – copie;</li>'+
                    '<li><strong>Certificat de deces</strong> al beneficiarului poliţei de asigurare - copie legalizată;</li>'+
                    '<li><strong>Certificat medical constatator al decesului</strong> beneficiarului poliţei de asigurare - copie</li>'+
                    '<li><strong>Documente ale autorităţilor competente</strong> privind circumstanţele în care a avut loc evenimentul - original;</li>'+
                    '<li><strong>Documente care dovedesc legătura solicitantului cu decedatul</strong> - copii;</li>'+
                    '<li><strong>Documente justificative privind cheltuielile efectuate</strong> – original;</li>'+
                    '<li><strong>Cerere de despăgubire</strong>, împărţita în daune morale şi/sau daune materiale, pe baza documentelor de cost pe care le are solicitantul pentru eveniment.</li>'+
                '</ul>';
                break;
            case 4:
            msg =
                '<h3 style="border-bottom: 1px solid #000;">Notificare</h3>' +
                '<p>Vă mulţumim!</p>' +
                '<p>Notificarea daunei s-a finalizat cu succes, iar numărul de notificare alocat cazului dvs. este: <strong>' + modalFileNumber + '</strong>.</p>';
            default:
                break;
        }

        return msg;
    }
    returnModal(modalId, content, onClick) {
        var action = '';
        if (typeof onClick === "undefined") {
            action = 'data-dismiss="modal"';
        } else {
            action = 'onclick="' + onClick + '"';
        }

        return '<div class="modal fade" id="' + modalId + '" tabindex="-1" role="dialog" aria-labelledby="confirmModalTitle" aria-hidden="true" data-backdrop="static">' +
                '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' +
                    '<div class="modal-content">' +
                        '<div class="modal-body">' +
                            content +
                        '</div>' +
                        '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-primary" ' + action + '>OK</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }

    formSubmit() {
        let self = this;
        let j_form = $('#form');
        let formData = j_form.serializeArray();
        let ajaxData = {};
        let pattern = new RegExp('^event_information/car_damage_parts/.*/parts');

        formData.forEach(function (element) {
            // If element is a multiple select input
            if (pattern.test(element.name)) {
                if (ajaxData[element.name] === undefined) {
                    ajaxData[element.name] = [];
                }

                ajaxData[element.name].push(element.value);
            } else {
                ajaxData[element.name] = element.value;
            }
        });
		
		ajaxData["event_information/car_damage_parts/1/side"] = 'Stanga';
		ajaxData["event_information/car_damage_parts/2/side"] = 'Dreapta';
		ajaxData["event_information/car_damage_parts/3/side"] = 'Central';
		ajaxData["event_information/car_damage_parts/4/side"] = 'Mecanica';
		ajaxData["event_information/car_damage_parts/5/side"] = 'Alte repere';

        // Transform dates to ISO format
        ajaxData['injured_information/date_birth'] = moment(ajaxData['injured_information/date_birth'], 'DD.MM.YYYY').toISOString();
        ajaxData['injured_information/license_release_date'] = moment(ajaxData['injured_information/license_release_date'], 'DD.MM.YYYY').toISOString();
		ajaxData['guilty_person/date_birth'] = moment(ajaxData['guilty_person/date_birth'], 'DD.MM.YYYY').toISOString();

        // Transform bools
        if (ajaxData['event_information/injured_persons/declaration'] === 'on') {
            ajaxData['event_information/injured_persons/declaration'] = true;
        } else {
            ajaxData['event_information/injured_persons/declaration'] = false;
        }

        ajaxData['policy_information/number'] = App.params && App.params.policyNumber ? App.params.policyNumber : null;
        ajaxData['event_information/date'] = App.params && App.params.eventDate ? moment(App.params.eventDate, 'YYYY-MM-DDTHH:mm:ss').toISOString() : null;

        ajaxData['completedSteps'] = App.caseCompletion;
        ajaxData['case'] = App.case;


        if (
            ($('select[name="event_information/case_type/type"]').val() === "Acte autoritati (Politie)" &&
            $('select[name="event_information/case_type/type_damage"]').val() === "Doar vatamari corporale/deces") ||

            ($('select[name="event_information/case_type/type"]').val() === "Acte autoritati (Politie)" &&
            $('select[name="event_information/case_type/type_damage"]').val() === "Daune materiale si vatamari corporale/deces")) {

                if ( parseInt($('input[name="event_information/injured_persons/number_injured_persons"]').val()) >= 1 || 
                    parseInt($('input[name="event_information/injured_persons/number_dead_persons"]').val()) >= 1) {
                    
                } else {
                    alert("Vă rugăm completaţi \"Numar persoane vatamate in urma evenimentului\" / \"Numar persoane decedate in urma evenimentului\".");
                    return false;
                }
        }
		
		//alert(JSON.stringify(ajaxData, null, 4));
		
        $.ajax({
            method: 'POST',
            url: 'index.php?request=sendNotification',
            data: ajaxData
        }).done(function (data) {

            let response = JSON.parse(data);
			
            if (!response || !response.status) {
                return false;
            }

            // Show modal
            var msg = '';

            if (($('select[name="event_information/case_type/type"]').val() === "Acte autoritati (Politie)"
                && $('select[name="event_information/case_type/type_damage"]').val() === "Doar daune materiale"
                && $('select[name="event_information/case_type/type_damage_to"]').val() === "Vehiculului pentru care solicit deschiderea notificarii"
                ) || $('select[name="event_information/case_type/type"]').val() === "Constatare amiabila de accident"
            ) {
                msg += App.returnMessage (
                    1, 
                    response && response.data ? response.data : '',
                    ajaxData['contact_person/firstname'],
                    ajaxData['contact_person/lastname']
                );
            } else if ($('select[name="event_information/case_type/type"]').val() === "Acte autoritati (Politie)" &&
            $('select[name="event_information/case_type/type_damage"]').val() === "Doar vatamari corporale/deces") {

                if (parseInt($('input[name="event_information/injured_persons/number_injured_persons"]').val()) >= 1) {
                    msg += App.returnMessage (
                        2, 
                        response && response.data ? response.data : '',
                        ajaxData['contact_person/firstname'],
                        ajaxData['contact_person/lastname']
                    );
                }

                if (parseInt($('input[name="event_information/injured_persons/number_dead_persons"]').val()) >= 1) {
                    msg += App.returnMessage (
                        3, 
                        response && response.data ? response.data : '',
                        ajaxData['contact_person/firstname'],
                        ajaxData['contact_person/lastname']
                    );
                }
            } else if ($('select[name="event_information/case_type/type"]').val() === "Acte autoritati (Politie)" &&
            $('select[name="event_information/case_type/type_damage"]').val() === "Daune materiale si vatamari corporale/deces") {
                msg += App.returnMessage (
                    1, 
                    response && response.data ? response.data : '',
                    ajaxData['contact_person/firstname'],
                    ajaxData['contact_person/lastname']
                );
                
                if (parseInt($('input[name="event_information/injured_persons/number_injured_persons"]').val()) >= 1) {
                    msg += App.returnMessage (
                        2, 
                        response && response.data ? response.data : '',
                        ajaxData['contact_person/firstname'],
                        ajaxData['contact_person/lastname']
                    );
                }

                if (parseInt($('input[name="event_information/injured_persons/number_dead_persons"]').val()) >= 1) {
                    msg += App.returnMessage (
                        3, 
                        response && response.data ? response.data : '',
                        ajaxData['contact_person/firstname'],
                        ajaxData['contact_person/lastname']
                    );
                } 
            } else {
                msg += App.returnMessage (
                    4, 
                    response && response.data ? response.data : '',
                    ajaxData['contact_person/firstname'],
                    ajaxData['contact_person/lastname']
                );
            }

            $('.modal-area').append(
                App.returnModal(
                    'modalMeasj',
                    msg,
                    'App.actions.modalOkAction(\'modalMeasj\')'
                )
            );
			
			let ajaxEmailData = {};
			ajaxEmailData['msg'] = msg;
			ajaxEmailData['email'] = ajaxData['contact_person/email'];
			ajaxEmailData['number'] = response && response.data ? response.data : '';
	
			$.ajax({
				method: 'POST',
				url: 'index.php?request=sendNotificationEmail',
				data: ajaxEmailData
			}).done(function (data) {
			});
			
			$('#modalMeasj').modal('show');

        }).fail(function(data)  {
			let response = JSON.parse(data.responseText);
			alert(response.data.replace(/\\n/g,"\n"));
		}); 
    }

    backAction() {
        let splitedPath = window.location.pathname.split('/');
        splitedPath[splitedPath.length - 1] = 'index.php';
        let url = splitedPath.join('/');
        window.location = url;
    }

    modalOkAction(modalName) {
        $('#' + modalName).modal('hide');
        setTimeout(function () {
            let splitedPath = window.location.pathname.split('/');
            splitedPath[splitedPath.length - 1] = 'index.php';
            let url = splitedPath.join('/');
            window.location = url;
        }, 400);
    }

    majorSteps() {
        let self = this;
        let parts = [
            $('#step1title').add('#step1content'),  // 1 Date despre persoana care notifica dauna
            $('#step2title').add('#step2content'),  // 2 Date eveniment
            $('#step3title').add('#step3content'),  // 3 Date vehicul avariat
            $('#step4title').add('#pas4'),          // 4 Date despre localizarea avariilor
            $('#step5title').add('#step5content'),  // 5 Date despre avariile provocate altor obiecte,in afara autovehiculelor
            $('#step6title').add('#step6content'),  // 6 Date despre proprietarul vehiculului pentru care se aviseaza dauna
            $('#step7title').add('#step7content'),  // 7 Date despre conducatorul vehiculului pentru care se notifica dauna
            $('#step8title').add('#step8content'),  // 8 Date despre vatamari corporale si/sau deces
            $('#step9title').add('#step9content'),  // 9 Locul unde va avea loc constatarea
            $('#step10title').add('#step10content'), // 10 Persoana contact pentru stabilirea constatari
			$('#step11title').add('#step11content') // 11 Persoana care a produs accidentul
        ];
        let j_cazNotificat = $('select[name="event_information/case_type/type"]');
        let j_tipDaune = $('select[name="event_information/case_type/type_damage"]');
        let j_dauneProduse = $('select[name="event_information/case_type/type_damage_to"]');
        let j_calitateaPersoanei = $('select[name="insurant_information/person_type"]');
		let j_notificationReason = $('select[name="insurant_information/notification_reason"]');
        let j_col3div = $('input[name="event_information/in_country/from_direction"]').parent().parent();
        let j_tipDauneDiv = j_tipDaune.parent();
        let j_dauneProduseDiv = j_dauneProduse.parent();
        let shownItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


        // CASES
        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Doar daune materiale'
            && j_dauneProduse.val() === 'Altor bunuri/animale'
        ) {
            shownItems = [0, 1, 4, 8, 9];
            App.case = 'document_dm_obiect';

            // Feedback
            if (['Pagubit', 'Reprezentant pagubit'].includes(j_calitateaPersoanei.val())) {
                shownItems = [0, 1, 8, 9];
                App.case = 'document_dm_obiect_pagubit';
            }

            j_col3div.hide();
            j_tipDauneDiv.show();
            j_dauneProduseDiv.show();
        }

        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Doar vatamari corporale/deces'
        ) {
            shownItems = [0, 1, 2, 3, 5, 6, 7, 8, 9];
            App.case = 'document_vatamari';

            // Feedback
            if (['Pagubit', 'Reprezentant pagubit'].includes(j_calitateaPersoanei.val())) {
                shownItems = [0, 1, 6, 7, 8, 9];
                App.case = 'document_vatamari_pagubit';
            }

            j_col3div.hide();
            j_tipDauneDiv.show();
            j_dauneProduseDiv.hide();
        }

        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Daune materiale si vatamari corporale/deces'
        ) {
            // shownItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            shownItems = [0, 1, 2, 3, 5, 6, 7, 8, 9];
            App.case = 'document_vatamari_dm';

            j_col3div.hide();
            j_tipDauneDiv.show()
            j_dauneProduseDiv.hide();
        }

        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Doar daune materiale'
            && j_dauneProduse.val() === 'Vehiculului pentru care solicit deschiderea notificarii'
        ) {
            shownItems = [0, 1, 2, 3, 5, 6, 8, 9];
            App.case = 'document_dm_vehicul';

            j_col3div.hide();
            j_tipDauneDiv.show();
            j_dauneProduseDiv.show();
        }

        if (j_cazNotificat.val() === 'Constatare amiabila de accident'
        ) {
            shownItems = [0, 1, 2, 3, 5, 6, 8, 9];
            App.case = 'constatare';

            j_col3div.show();
            j_tipDauneDiv.hide();
            j_dauneProduseDiv.hide();
        }
		
		if (['Pagubit', 'Reprezentant pagubit'].includes(j_calitateaPersoanei.val()) ||
			j_notificationReason.val() === 'Decontare directa') {
			shownItems.push(10);
		}
		
        // Added after feedback
        self.additionalSteps();
        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Doar daune materiale'
            && j_dauneProduse.val() === 'Altor bunuri/animale'
        ) {
            $("#step5title > div > div").text('Pas 3/5 Date despre daunele produse bunurilor/animalelor');
        } else {
            $("#step5title > div > div").text('Pas 3/5 Date despre avariile provocate altor obiecte,in afara autovehiculelor');
        }

        App.caseCompletion = shownItems;

        parts.forEach((item, index) => {
            if (shownItems.includes(index)) {
                item.show();
            } else {
                item.find('input, textarea')
                    .val('');

                item.hide();
            }
        });

        self.stepsCount();
    }

    stepsCount() {
        let j_form = $('#form');
        let visibleNodes = j_form.children('.title').not('[style="display: none;"]');
        let visibleNodesCount = visibleNodes.length;

        visibleNodes.each(function (index, item) {
            let j_item = $(item);
            let textNode = j_item.children().children();
            let splitText = textNode.text().trim().split(' ');

            splitText[1] = `${index + 1}/${visibleNodesCount}`;

            textNode.text(splitText.join(' '));
        });
    }

    // STEPS
    step1After() {
        let policyNumber = App.params.policyNumber;

        $.ajax({
            method: 'POST',
            url: 'index.php?request=checkDecontare',
            data: {
                policyNumber: policyNumber,
            }
        }).done(function (data) {
            let responseData = JSON.parse(data);

            if (responseData.status && responseData.data && responseData.data === true) {
                $('#step1content > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)').show();
            } else {
                $('#step1content > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)').hide();
            }
        });

        $('select[name="insurant_information/person_type"]').change(() => {
            if (['Asigurat', 'Reprezentant asigurat'].includes($('select[name="insurant_information/person_type"]').val())) {
                $('select[name="insurant_information/notification_reason"]')
                    .parent()
                    .show();
            } else {
                $('select[name="insurant_information/notification_reason"]')
                    .parent()
                    .hide();
            }
        });

        $('select[name="insurant_information/notification_reason"]').change(() => {
            if (['Decontare directa', 'Eliberare Document de Intrare in Reparatie'].includes($('select[name="insurant_information/notification_reason"]').val())) {
                $('select[name="event_information/case_type/type"]')
                    .val('Constatare amiabila de accident')
                    .prop("disabled", true)
                    .trigger('change');
            } else {
                $('select[name="event_information/case_type/type"]')
                    .val('Acte autoritati (Politie)')
                    .prop("disabled", false)
                    .trigger('change');
            }
        });

        $('select[name="insurant_information/person_type"]').change(() => {
            if (['Pagubit', 'Reprezentant pagubit'].includes($('select[name="insurant_information/person_type"]').val())) {
                $('select[name="event_information/case_type/type"]')
                    .val('Acte autoritati (Politie)')
                    .prop("disabled", false)
                    .trigger('change');

                $('select[name="insurant_information/notification_reason"]')
                    .val('');
            }
        });
    }

    step2After() {
        let self = this;

        $('select[name="event_information/in_country/location_where"]').change(function () {
            let j_element = $(this);

            switch (j_element.val()) {
                case 'In tara':
                    $('input[name="event_information/country"]')
                        .val('')
                        .parent()
                        .hide();

                    $('select[name="event_information/in_country/county"]')
                        .add('select[name="event_information/in_country/locality_where"]')
                        .add('select[name="event_information/in_country/road"]')
                        .add('select[name="event_information/in_country/locality"]')
                        .add('input[name="event_information/in_country/street"]')
                        .parent()
                        .show((200));

                    $('input[name="event_information/in_country/number_street"]')
                        .add('input[name="event_information/in_country/building"]')
                        .add('input[name="event_information/in_country/scale"]')
                        .parent()
                        .parent()
                        .show((200));
						
                    $('select[name="event_information/country"]')
                        .parent()
                        .hide();						

                    $('select[name="event_information/in_country/locality_where"]')
                        .val('In localitate')
                        .trigger('change');

                    $('select[name="constat_meeting_details/county"]')
                        .val('')
                        .parent()
                        .show();

                    $('select[name="constat_meeting_details/location"]')
                        .val('')
                        .parent()
                        .parent()
                        .show();
						
					$('select[name="constat_meeting_details/county"]').prop('required', true);
					$('select[name="constat_meeting_details/location"]').prop('required', true);
                    break;

                case 'In afara tarii':
                    $('select[name="event_information/in_country/county"]')
                        .add('select[name="event_information/in_country/locality_where"]')
                        .add('select[name="event_information/in_country/road"]')
                        .add('select[name="event_information/in_country/locality"]')
                        .add('input[name="event_information/in_country/street"]')
                        .val('')
                        .parent()
                        .hide();

                    $('input[name="event_information/in_country/number_street"]')
                        .add('input[name="event_information/in_country/building"]')
                        .add('input[name="event_information/in_country/scale"]')
                        .val('')
                        .parent()
                        .parent()
                        .hide();

                    $('select[name="event_information/country"]')
                        .parent()
                        .show((200));

                    $('select[name="constat_meeting_details/county"]')
                        .val('');

                    $('select[name="constat_meeting_details/location"]')
                        .val('')
                        .parent()
                        .parent()
                        .hide();
						
					$('select[name="constat_meeting_details/county"]').prop('required', false);
					$('select[name="constat_meeting_details/location"]').prop('required', false);					
                default:
            }
        });

        $('select[name="event_information/in_country/locality_where"]').change(function () {
            let j_element = $(this);

            switch (j_element.val()) {
                case 'In localitate':
                    $('select[name="event_information/in_country/road"]')
                        .val('')
                        .parent()
                        .hide();

                    $('select[name="event_information/in_country/locality"]')
                        .add('input[name="event_information/in_country/street"]')
                        .parent()
                        .show((200));

                    $('input[name="event_information/in_country/number_street"]')
                        .add('input[name="event_information/in_country/building"]')
                        .add('input[name="event_information/in_country/scale"]')
                        .parent()
                        .parent()
                        .show((200));
                    break;

                case 'In afara localitatii':
                    $('select[name="event_information/in_country/road"]')
                        .parent()
                        .show((200));

                    $('select[name="event_information/in_country/locality"]')
                        .add('input[name="event_information/in_country/street"]')
                        .val('');

                    $('input[name="event_information/in_country/number_street"]')
                        .add('input[name="event_information/in_country/building"]')
                        .add('input[name="event_information/in_country/scale"]')
                        .val('')
                        .parent()
                        .parent()
                        .hide();
                    break;

                default:
            }
        });

        $('select[name="event_information/vehicle_type"]').change(function () {
            let j_elementValue = $(this).val();

            if (j_elementValue === 'Parcat/Stationat') {
                $('input[name="event_information/in_country/from_direction"]')
                    .val('')
                    .parent()
                    .hide();

                $('input[name="event_information/in_country/to_direction"]')
                    .val('')
                    .parent()
                    .hide();
					
				$('#step7title').hide();
				$('#step7content').hide();
				
            } else {
                $('input[name="event_information/in_country/from_direction"]')
                    .parent()
                    .show();

                $('input[name="event_information/in_country/to_direction"]')
                    .parent()
                    .show();
					
				$('#step7title').show();
				$('#step7content').show();
            }
			
			self.stepsCount();
        });

        $('select[name="event_information/case_type/type"]')
            .add('select[name="event_information/case_type/type_damage"]')
            .add('select[name="event_information/case_type/type_damage_to"]')
            .add('select[name="insurant_information/person_type"]')
			.add('select[name="insurant_information/notification_reason"]')
            .change(function () {
                self.majorSteps();

                // Feedback
                self.additionalSteps();
            });
    }

	step3After() {
		$('select[name="injured_information/auto/cascoinsurancecompany"]').change(function () {
			let j_element = $(this);

			if (j_element.val() == 'other')
				$('input[name="injured_information/auto/othercascoinsurancecompany"]')
					.val('')
					.parent()
					.show();
			else
				$('input[name="injured_information/auto/othercascoinsurancecompany"]')
					.val('')
					.parent()
					.hide();
		});
		
		$('select[name="injured_information/auto/hascasco"]').change(function () {
			let j_element = $(this);

			if (j_element.val() == 'Da')
				$('select[name="injured_information/auto/cascoinsurancecompany"]')
					.val('')
					.parent()
					.show();
			else
				$('select[name="injured_information/auto/cascoinsurancecompany"]')
					.val('')
					.parent()
					.hide();
		});		
	}
	
    step4After() {
        $(document).on('change', '#pas4 .parent-select', function () {
            let j_element = $(this);
            let j_parentNode = j_element.parent().parent().parent();
            let childrens = j_parentNode.children('div');
            let j_multipleSelect = j_element.parent().parent().next().find('select');

            switch (j_element.val()) {
                case 'Stanga':
                    j_multipleSelect.empty().append(`
                    <option value="Far">Far</option>
                    <option value="Aripa fata">Aripa fata</option>
                    <option value="Portiera fata">Portiera fata</option>
                    <option value="Oglinda retrovizoare">Oglinda retrovizoare</option>
                    <option value="Portiera spate">Portiera spate</option>
                    <option value="Prag">Prag</option>
                    <option value="Aripa spate">Aripa spate</option>
                    <option value="Stop">Stop</option>
                    `);
                    break;

                case 'Dreapta':
                    j_multipleSelect.empty().append(`
                    <option value="Far">Far</option>
                    <option value="Aripa fata">Aripa fata</option>
                    <option value="Portiera fata">Portiera fata</option>
                    <option value="Oglinda retrovizoare">Oglinda retrovizoare</option>
                    <option value="Portiera spate">Portiera spate</option>
                    <option value="Prag">Prag</option>
                    <option value="Janta">Janta</option>
                    <option value="Aripa spate">Aripa spate</option>
                    <option value="Stop">Stop</option>
                    `);
                    break;

                case 'Central':
                    j_multipleSelect.empty().append(`
                    <option value="Bara fata">Bara fata</option>
                    <option value="Grila bara fata">Grila bara fata</option>
                    <option value="Grila radiator">Grila radiator</option>
                    <option value="Capota motor">Capota motor</option>
                    <option value="Parbriz">Parbriz</option>
                    <option value="Airbag sofer">Airbag sofer</option>
                    <option value="Airbag pasager">Airbag pasager</option>
                    <option value="Plafon">Plafon</option>
                    <option value="Luneta">Luneta</option>
                    <option value="Capota portbagaj">Capota portbagaj</option>
                    <option value="Bara spate">Bara spate</option>
                    <option value="Panou spate">Panou spate</option>
                    <option value="Carlig remorcare">Carlig remorcare</option>
                    `);
                    break;

                case 'Mecanica':
                    j_multipleSelect.empty().append(`
                    <option value="Radiator apa">Radiator apa</option>
                    <option value="Radiator A/C">Radiator A/C</option>
                    <option value="Electroventilator">Electroventilator</option>
                    <option value="Motor">Motor</option>
                    <option value="Cutie Viteze">Cutie Viteze</option>
                    <option value="Suspensie/Directie fata">Suspensie/Directie fata</option>
                    <option value="Suspensie spate">Suspensie spate</option>
                    `);
                    break;

                default:
            }

            switch (j_element.val()) {
                case 'Stanga':
                case 'Dreapta':
                case 'Central':
                case 'Mecanica':
                    $(childrens[1])
                        .add(childrens[2])
                        .show((200));
                    break;

                default:
                    $(childrens[1])
                        .add(childrens[2])
                        .hide((200))
                        .find('select, textarea')
                        .val('');
            }

            j_multipleSelect.find('option').mousedown(function (e) {
                e.preventDefault();
                $(this).prop('selected', !$(this).prop('selected'));
                return false;
            });
        });
    }

    step6After() {
        $('select[name="injured_information/auto_owner/person_type"]').change(function () {
            let j_element = $(this);

            // Clear inputs content
            $('#step6content')
                .find('input, select')
                .not('select[name="injured_information/auto_owner/person_type"]')
                .val('');
            $('select[name="injured_information/auto_owner/type').val('Alta persoana');

            let j_locality = $(`#pas6locality`);
            let pleaseSelectOption = '<option value="" selected="">Selecteaza optiunea</option>';
            j_locality.empty().append(pleaseSelectOption);

            switch (j_element.val()) {
                case 'Persoana fizica':
                    $('input[name="injured_information/auto_owner/companyname"]')
                        .add('input[name="injured_information/auto_owner/CUI"]')
                        .parent()
                        .hide();

                    $('input[name="injured_information/auto_owner/firstname"]')
                        .add('input[name="injured_information/auto_owner/lastname"]')
                        .add('input[name="injured_information/auto_owner/CNP"]')
                        .add('select[name="injured_information/auto_owner/type"]')
                        .parent()
                        .show(200);
                    break;

                case 'Persoana juridica':
                    $('input[name="injured_information/auto_owner/firstname"]')
                        .add('input[name="injured_information/auto_owner/lastname"]')
                        .add('input[name="injured_information/auto_owner/CNP"]')
                        .add('select[name="injured_information/auto_owner/type"]')
                        .parent()
                        .hide();

                    $('input[name="injured_information/auto_owner/companyname"]')
                        .add('input[name="injured_information/auto_owner/CUI"]')
                        .parent()
                        .show(200);
                    break;

                default:
            }
        });

        $('select[name="injured_information/auto_owner/type"]').change(function () {
            console.log('test');
            let j_element = $(this);

            // Clear inputs content
            $('#step6content')
                .find('input')
                .val('');

            switch (j_element.val()) {
                case 'Aceeasi cu cea care notifica':
                    $('input[name="injured_information/auto_owner/firstname"]').val($('input[name="insurant_information/firstname"]').val());
                    $('input[name="injured_information/auto_owner/lastname"]').val($('input[name="insurant_information/lastname"]').val());
                    $('input[name="injured_information/auto_owner/phone"]').val($('input[name="insurant_information/phone"]').val());
                    $('input[name="injured_information/auto_owner/phone2"]').val($('input[name="insurant_information/phone2"]').val());
                    $('input[name="injured_information/auto_owner/email"]').val($('input[name="insurant_information/email"]').val());
                    $('input[name="injured_information/auto_owner/CNP"]').val($('input[name="insurant_information/CNP"]').val());
                    break;

                default:
            }
        });
    }

    step7After() {
        $('select[name="injured_information/person_type"]').change(function () {
            let j_element = $(this);

            // Clear inputs content
            $('#step7content')
                .find('input, select')
                .not('select[name="injured_information/person_type"]')
                .val('');

                switch (j_element.val()) {
                    case 'Aceeasi persoana cu cea care notifica':
                        $('input[name="injured_information/firstname"]').val($('input[name="insurant_information/firstname"]').val());
                        $('input[name="injured_information/lastname"]').val($('input[name="insurant_information/lastname"]').val());
                        $('input[name="injured_information/CNP"]').val($('input[name="insurant_information/CNP"]').val());
                        $('input[name="injured_information/phone"]').val($('input[name="insurant_information/phone"]').val());
                        $('input[name="injured_information/phone2"]').val($('input[name="insurant_information/phone2"]').val());
                        break;

                    case 'Aceeasi persoana cu proprietarul vehiculului':
						if ($('select[name="injured_information/auto_owner/person_type"]').val() === 'Persoana fizica') {
							$('input[name="injured_information/firstname"]').val($('input[name="injured_information/auto_owner/firstname"]').val());
							$('input[name="injured_information/lastname"]').val($('input[name="injured_information/auto_owner/lastname"]').val());
							$('input[name="injured_information/CNP"]').val($('input[name="injured_information/auto_owner/CNP"]').val());
							$('input[name="injured_information/phone"]').val($('input[name="injured_information/auto_owner/phone"]').val());
							$('input[name="injured_information/phone2"]').val($('input[name="injured_information/auto_owner/phone2"]').val());
						}
                        break;

                    default:
                }
        });
    }

    step8After() {
        let j_checkbox = $('input[name="event_information/injured_persons/declaration"]');

        j_checkbox.change(function () {
            let checked = $(this).prop('checked');

            if (checked) {
                $('#divpas8injured')
                    .add('#divpas8dead')
                    .hide();
            } else {
                $('#divpas8injured')
                    .add('#divpas8dead')
                    .show();
            }
        });
    }

    step10After() {
        $('select[name="contact_person/type"]').change(function () {
            let j_element = $(this);

            // Clear inputs content
            $('#step10content')
                .find('input')
                .val('');

            switch (j_element.val()) {
                case 'Aceeasi cu persoana care notifica dauna':
                    $('input[name="contact_person/firstname"]').val($('input[name="insurant_information/firstname"]').val());
                    $('input[name="contact_person/lastname"]').val($('input[name="insurant_information/lastname"]').val());
                    $('input[name="contact_person/phone"]').val($('input[name="insurant_information/phone"]').val());
                    $('input[name="contact_person/phone2"]').val($('input[name="insurant_information/phone2"]').val());
                    $('input[name="contact_person/email"]').val($('input[name="insurant_information/email"]').val());
                    break;

                case 'Aceeasi persoana cu proprietarul vehiculului':
                    $('input[name="contact_person/firstname"]').val($('input[name="injured_information/auto_owner/firstname"]').val());
                    $('input[name="contact_person/lastname"]').val($('input[name="injured_information/auto_owner/lastname"]').val());
                    $('input[name="contact_person/phone"]').val($('input[name="injured_information/auto_owner/phone"]').val());
                    $('input[name="contact_person/phone2"]').val($('input[name="injured_information/auto_owner/phone2"]').val());
                    $('input[name="contact_person/email"]').val($('input[name="injured_information/auto_owner/email"]').val());
                    break;
					
                case 'Aceeasi persoana cu conducatorul vehiculului':
                    $('input[name="contact_person/firstname"]').val($('input[name="injured_information/firstname"]').val());
                    $('input[name="contact_person/lastname"]').val($('input[name="injured_information/lastname"]').val());
                    $('input[name="contact_person/phone"]').val($('input[name="injured_information/phone"]').val());
                    $('input[name="contact_person/phone2"]').val($('input[name="injured_information/phone2"]').val());
                    $('input[name="contact_person/email"]').val($('input[name="injured_information/email"]').val());
                    break;

                default:
            }
        });
    }

    step11After() {
        $('select[name="guilty_person/quality"]').change(function () {
            let j_element = $(this);

            // Clear inputs content
            $('#step11content')
                .find('input')
                .val('');
        });
    }

    additionalSteps() {
        let j_cazNotificat = $('select[name="event_information/case_type/type"]');
        let j_calitateaPersoanei = $('select[name="insurant_information/person_type"]');
        let j_tipDaune = $('select[name="event_information/case_type/type_damage"]');
        let j_dauneProduse = $('select[name="event_information/case_type/type_damage_to"]');

        let j_labelEvenimentulProdus = $('#step2content > div:nth-child(1) > div.form_group > label');


        if (j_cazNotificat.val() === 'Constatare amiabila de accident'
            && ['Pagubit', 'Reprezentant pagubit'].includes(j_calitateaPersoanei.val())
        ) {
            j_labelEvenimentulProdus.text('Evenimentul s-a produs in timp ce vehiculul pagubit era:');
        } else {
            j_labelEvenimentulProdus.text('Evenimentul s-a produs in timp ce vehiculul era:');
        }


        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Doar vatamari corporale/deces'
            && ['Pagubit', 'Reprezentant pagubit'].includes(j_calitateaPersoanei.val())
        ) {
            $('select[name="event_information/vehicle_type"]')
                .parent()
                .hide();
        } else {
            $('select[name="event_information/vehicle_type"]')
                .parent()
                .show();
        }


        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && ['Daune materiale si vatamari corporale/deces', 'Doar vatamari corporale/deces'].includes(j_tipDaune.val())
        ) {
            $('input[name="event_information/injured_persons/declaration"]')
                .parent()
                .hide();
        } else {
            $('input[name="event_information/injured_persons/declaration"]')
                .parent()
                .show();
        }


        if (j_cazNotificat.val() === 'Acte autoritati (Politie)'
            && j_tipDaune.val() === 'Doar daune materiale'
            && j_dauneProduse.val() === 'Altor bunuri/animale'
        ) {
            $('select[name="event_information/vehicle_type"]').parent().hide();
        } else {
            $('select[name="event_information/vehicle_type"]').parent().show();
        }
    }
}

window.App = new Application();