// circumvent REST CALL since no server active on demo
let world_data = [{"id":"001","name":"Brazil","birth_rate_per_1000":"16.405","cell_phones_per_100":"90.01936334","children_per_woman":"1.862","electricity_consumption_per_capita":"2201.808724","gdp_per_capita":"4424.758692","gdp_per_capita_growth":"-1.520402823","inflation_annual":"8.228535058","internet_user_per_100":"39.22","life_expectancy":"74","military_expenditure_percent_of_gdp":"1.615173655","gps_lat":"-14.235004000","gps_long":"-51.925280000"},{"id":"002","name":"Canada","birth_rate_per_1000":"10.625","cell_phones_per_100":"70.70997244","children_per_woman":"1.668","electricity_consumption_per_capita":"15119.76414","gdp_per_capita":"25069.86915","gdp_per_capita_growth":"-3.953353186","inflation_annual":"2.944408564","internet_user_per_100":"80.17086651","life_expectancy":"80.9","military_expenditure_percent_of_gdp":"1.415710422","gps_lat":"56.130366000","gps_long":"-106.346771000"},{"id":"003","name":"Chile","birth_rate_per_1000":"15.04","cell_phones_per_100":"97.01862561","children_per_woman":"1.873","electricity_consumption_per_capita":"3276.06449","gdp_per_capita":"6451.631126","gdp_per_capita_growth":"-2.610485847","inflation_annual":"7.47050527","internet_user_per_100":"38.8","life_expectancy":"78.8","military_expenditure_percent_of_gdp":"3.064076139","gps_lat":"-35.675147000","gps_long":"-71.542969000"},{"id":"004","name":"China","birth_rate_per_1000":"13.536","cell_phones_per_100":"55.97490921","children_per_woman":"1.642","electricity_consumption_per_capita":"2632.724637","gdp_per_capita":"2208.403948","gdp_per_capita_growth":"8.648414427","inflation_annual":"6.684109668","internet_user_per_100":"28.97659939","life_expectancy":"75.6","military_expenditure_percent_of_gdp":"2.24110794","gps_lat":"35.86166000","gps_long":"104.19539700"},{"id":"005","name":"Colombia","birth_rate_per_1000":"20.605","cell_phones_per_100":"92.34584564","children_per_woman":"2.405","electricity_consumption_per_capita":"1041.994137","gdp_per_capita":"3137.695335","gdp_per_capita_growth":"0.2081538559","inflation_annual":"3.666941163","internet_user_per_100":"30","life_expectancy":"75.3","military_expenditure_percent_of_gdp":"3.833780372","gps_lat":"4.570868000","gps_long":"-74.297333000"},{"id":"006","name":"Ecuador","birth_rate_per_1000":"20.989","cell_phones_per_100":"92.84925653","children_per_woman":"2.69","electricity_consumption_per_capita":"1078.038961","gdp_per_capita":"1692.067197","gdp_per_capita_growth":"-1.079538461","inflation_annual":"7.595866872","internet_user_per_100":"24.6","life_expectancy":"74.1","military_expenditure_percent_of_gdp":"3.746501879","gps_lat":"-1.831239000","gps_long":"-78.183406000"},{"id":"007","name":"Egypt","birth_rate_per_1000":"24.83","cell_phones_per_100":"69.43661504","children_per_woman":"2.919","electricity_consumption_per_capita":"1607.918763","gdp_per_capita":"1911.964501","gdp_per_capita_growth":"2.856917581","inflation_annual":"10.10750976","internet_user_per_100":"24.28","life_expectancy":"70.2","military_expenditure_percent_of_gdp":"2.137305699","gps_lat":"26.820553000","gps_long":"30.802498000"},{"id":"008","name":"Finland","birth_rate_per_1000":"11.127","cell_phones_per_100":"144.1530224","children_per_woman":"1.86","electricity_consumption_per_capita":"15241.61194","gdp_per_capita":"26205.68832","gdp_per_capita_growth":"-8.791558776","inflation_annual":"0.4277308694","internet_user_per_100":"82.53133098","life_expectancy":"79.7","military_expenditure_percent_of_gdp":"1.501872268","gps_lat":"61.924110000","gps_long":"25.748151000"},{"id":"009","name":"France","birth_rate_per_1000":"12.21","cell_phones_per_100":"95.44434226","children_per_woman":"1.978","electricity_consumption_per_capita":"7339.946832","gdp_per_capita":"22508.76261","gdp_per_capita_growth":"-3.264056248","inflation_annual":"1.050366124","internet_user_per_100":"69.0633593","life_expectancy":"81","military_expenditure_percent_of_gdp":"2.55313249","gps_lat":"46.22763800","gps_long":"2.21374900"},{"id":"010","name":"Germany","birth_rate_per_1000":"8.136","cell_phones_per_100":"127.4188883","children_per_woman":"1.376","electricity_consumption_per_capita":"6753.05764","gdp_per_capita":"24368.19561","gdp_per_capita_growth":"-4.886323581","inflation_annual":"0.5959234322","internet_user_per_100":"79.48523153","life_expectancy":"80","military_expenditure_percent_of_gdp":"1.438871341","gps_lat":"51.165691000","gps_long":"10.451526000"},{"id":"011","name":"Iceland","birth_rate_per_1000":"14.738","cell_phones_per_100":"107.6604456","children_per_woman":"2.123","electricity_consumption_per_capita":"51259.18763","gdp_per_capita":"35310.97441","gdp_per_capita_growth":"-6.990418561","inflation_annual":"6.900703626","internet_user_per_100":"92.13686385","life_expectancy":"82.2","military_expenditure_percent_of_gdp":"0.0820538039","gps_lat":"64.9630510000","gps_long":"-19.0208350000"},{"id":"012","name":"Iraq","birth_rate_per_1000":"31.585","cell_phones_per_100":"65.47478839","children_per_woman":"4.276","electricity_consumption_per_capita":"1086.323768","gdp_per_capita":"752.1833548","gdp_per_capita_growth":"1.141874289","inflation_annual":"25.22442136","internet_user_per_100":"1.047516616","life_expectancy":"68.1","military_expenditure_percent_of_gdp":"4.621383386","gps_lat":"33.223191000","gps_long":"43.679291000"},{"id":"013","name":"Japan","birth_rate_per_1000":"8.201","cell_phones_per_100":"91.8955442","children_per_woman":"1.359","electricity_consumption_per_capita":"7838.005685","gdp_per_capita":"38242.02429","gdp_per_capita_growth":"-6.180260885","inflation_annual":"-2.08543109","internet_user_per_100":"77.38468963","life_expectancy":"82.8","military_expenditure_percent_of_gdp":"1.019445017","gps_lat":"36.204824000","gps_long":"138.252924000"},{"id":"014","name":"Kazakhstan","birth_rate_per_1000":"19.775","cell_phones_per_100":"107.7147692","children_per_woman":"2.537","electricity_consumption_per_capita":"4447.142293","gdp_per_capita":"2345.86415","gdp_per_capita_growth":"-1.437812068","inflation_annual":"19.5422854","internet_user_per_100":"17.91457965","life_expectancy":"66.6","military_expenditure_percent_of_gdp":"1.105385125","gps_lat":"48.019573000","gps_long":"66.923684000"},{"id":"015","name":"Mexico","birth_rate_per_1000":"19.091","cell_phones_per_100":"74.25785259","children_per_woman":"2.313","electricity_consumption_per_capita":"1869.82352","gdp_per_capita":"5875.619997","gdp_per_capita_growth":"-7.417438847","inflation_annual":"4.033645258","internet_user_per_100":"26.34","life_expectancy":"75.5","military_expenditure_percent_of_gdp":"0.5396656609","gps_lat":"23.6345010000","gps_long":"-102.5527840000"},{"id":"016","name":"New Zealand","birth_rate_per_1000":"13.831","cell_phones_per_100":"108.7301521","children_per_woman":"2.125","electricity_consumption_per_capita":"9375.550304","gdp_per_capita":"14778.16393","gdp_per_capita_growth":"-1.552308788","inflation_annual":"3.486782259","internet_user_per_100":"79.82609287","life_expectancy":"80.3","military_expenditure_percent_of_gdp":"1.140562366","gps_lat":"-40.900557000","gps_long":"174.885971000"},{"id":"017","name":"Nigeria","birth_rate_per_1000":"40.134","cell_phones_per_100":"48.23561006","children_per_woman":"6.021","electricity_consumption_per_capita":"119.8151486","gdp_per_capita":"513.5003377","gdp_per_capita_growth":"4.3526073","inflation_annual":"9.313146383","internet_user_per_100":"20","life_expectancy":"58.5","military_expenditure_percent_of_gdp":"0.8924302789","gps_lat":"9.0819990000","gps_long":"8.6752770000"},{"id":"018","name":"Peru","birth_rate_per_1000":"21.342","cell_phones_per_100":"85.86901405","children_per_woman":"2.545","electricity_consumption_per_capita":"1043.052601","gdp_per_capita":"2955.186222","gdp_per_capita_growth":"-0.2228977721","inflation_annual":"4.49134447","internet_user_per_100":"31.4","life_expectancy":"76.7","military_expenditure_percent_of_gdp":"1.348875763","gps_lat":"-9.189967000","gps_long":"-75.015152000"},{"id":"019","name":"Russia","birth_rate_per_1000":"10.828","cell_phones_per_100":"161.1162887","children_per_woman":"1.537","electricity_consumption_per_capita":"6132.978648","gdp_per_capita":"2806.41483","gdp_per_capita_growth":"-7.749103694","inflation_annual":"11.60398093","internet_user_per_100":"29.23584146","life_expectancy":"68.3","military_expenditure_percent_of_gdp":"4.36259042","gps_lat":"61.52401000","gps_long":"105.31875600"},{"id":"020","name":"Saudi Arabia","birth_rate_per_1000":"23.569","cell_phones_per_100":"167.3474553","children_per_woman":"2.898","electricity_consumption_per_capita":"7430.743897","gdp_per_capita":"9294.355996","gdp_per_capita_growth":"-2.242127204","inflation_annual":"14.36222827","internet_user_per_100":"38","life_expectancy":"77.6","military_expenditure_percent_of_gdp":"10.95653405","gps_lat":"23.88594200","gps_long":"45.07916200"},{"id":"021","name":"South Africa","birth_rate_per_1000":"22.113","cell_phones_per_100":"93.33587369","children_per_woman":"2.5","electricity_consumption_per_capita":"4532.021902","gdp_per_capita":"3697.67368","gdp_per_capita_growth":"-2.732989408","inflation_annual":"7.861608575","internet_user_per_100":"10.08745979","life_expectancy":"55.8","military_expenditure_percent_of_gdp":"1.394530379","gps_lat":"-30.559482000","gps_long":"22.937506000"},{"id":"022","name":"Sweden","birth_rate_per_1000":"11.72","cell_phones_per_100":"112.1241184","children_per_woman":"1.937","electricity_consumption_per_capita":"14143.01101","gdp_per_capita":"30885.45914","gdp_per_capita_growth":"-5.976535294","inflation_annual":"1.022227082","internet_user_per_100":"91.12326108","life_expectancy":"81.2","military_expenditure_percent_of_gdp":"1.247701873","gps_lat":"60.128161000","gps_long":"18.643501000"},{"id":"023","name":"United Arab Emirates","birth_rate_per_1000":"14.027","cell_phones_per_100":"153.7997194","children_per_woman":"1.903","electricity_consumption_per_capita":"9998.291079","gdp_per_capita":"22507.00157","gdp_per_capita_growth":"-11.99171952","inflation_annual":"8.549032358","internet_user_per_100":"64","life_expectancy":"76.1","military_expenditure_percent_of_gdp":"5.834881976","gps_lat":"23.424076000","gps_long":"53.847818000"},{"id":"024","name":"United Kingdom","birth_rate_per_1000":"12.195","cell_phones_per_100":"130.1742603","children_per_woman":"1.89","electricity_consumption_per_capita":"5685.635995","gdp_per_capita":"27933.77767","gdp_per_capita_growth":"-5.019251823","inflation_annual":"2.861406642","internet_user_per_100":"77.79971962","life_expectancy":"79.7","military_expenditure_percent_of_gdp":"2.667209048","gps_lat":"52.355517700","gps_long":"-1.174319700"},{"id":"025","name":"United States","birth_rate_per_1000":"14.191","cell_phones_per_100":"89.14911634","children_per_woman":"2.002","electricity_consumption_per_capita":"12913.71143","gdp_per_capita":"36539.22823","gdp_per_capita_growth":"-4.342271218","inflation_annual":"1.152326348","internet_user_per_100":"71.21181627","life_expectancy":"78.3","military_expenditure_percent_of_gdp":"4.822730027","gps_lat":"37.090240000","gps_long":"-95.712891000"}];

// taken from https://gist.github.com/keeguon/2310008
let flagDict = { "Afghanistan": "AF", "Åland Islands": "AX","Albania": "AL","Algeria": "DZ","American Samoa": "AS","Andorra": "AD","Angola": "AO","Anguilla": "AI","Antarctica": "AQ","Antigua and Barbuda": "AG","Argentina": "AR","Armenia": "AM","Aruba": "AW","Australia": "AU","Austria": "AT","Azerbaijan": "AZ","Bahamas": "BS","Bahrain": "BH","Bangladesh": "BD","Barbados": "BB","Belarus": "BY","Belgium": "BE","Belize": "BZ","Benin": "BJ","Bermuda": "BM","Bhutan": "BT","Bolivia": "BO","Bosnia and Herzegovina": "BA","Botswana": "BW","Bouvet Island": "BV","Brazil": "BR","British Indian Ocean Territory": "IO","Brunei Darussalam": "BN","Bulgaria": "BG","Burkina Faso": "BF","Burundi": "BI","Cambodia": "KH","Cameroon": "CM","Canada": "CA","Cape Verde": "CV","Cayman Islands": "KY","Central African Republic": "CF","Chad": "TD","Chile": "CL","China": "CN","Christmas Island": "CX","Cocos (Keeling) Islands": "CC","Colombia": "CO","Comoros": "KM","Congo": "CG","Congo, The Democratic Republic of the": "CD","Cook Islands": "CK","Costa Rica": "CR","Cote D'Ivoire": "CI","Croatia": "HR","Cuba": "CU","Cyprus": "CY","Czech Republic": "CZ","Denmark": "DK","Djibouti": "DJ","Dominica": "DM","Dominican Republic": "DO","Ecuador": "EC","Egypt": "EG","El Salvador": "SV","Equatorial Guinea": "GQ","Eritrea": "ER","Estonia": "EE","Ethiopia": "ET","Falkland Islands (Malvinas)": "FK","Faroe Islands": "FO","Fiji": "FJ","Finland": "FI","France": "FR","French Guiana": "GF","French Polynesia": "PF","French Southern Territories": "TF","Gabon": "GA","Gambia": "GM","Georgia": "GE","Germany": "DE","Ghana": "GH","Gibraltar": "GI","Greece": "GR","Greenland": "GL","Grenada": "GD","Guadeloupe": "GP","Guam": "GU","Guatemala": "GT","Guernsey": "GG","Guinea": "GN","Guinea-Bissau": "GW","Guyana": "GY","Haiti": "HT","Heard Island and Mcdonald Islands": "HM","Holy See (Vatican City State)": "VA","Honduras": "HN","Hong Kong": "HK","Hungary": "HU","Iceland": "IS","India": "IN","Indonesia": "ID","Iran, Islamic Republic Of": "IR","Iraq": "IQ","Ireland": "IE","Isle of Man": "IM","Israel": "IL","Italy": "IT","Jamaica": "JM","Japan": "JP","Jersey": "JE","Jordan": "JO","Kazakhstan": "KZ","Kenya": "KE","Kiribati": "KI","Korea, Democratic Peoples Republic of": "KP","Korea, Republic of": "KR","Kuwait": "KW","Kyrgyzstan": "KG","Lao Peoples Democratic Republic": "LA","Latvia": "LV","Lebanon": "LB","Lesotho": "LS","Liberia": "LR","Libyan Arab Jamahiriya": "LY","Liechtenstein": "LI","Lithuania": "LT","Luxembourg": "LU","Macao": "MO","Macedonia, The Former Yugoslav Republic of": "MK","Madagascar": "MG","Malawi": "MW","Malaysia": "MY","Maldives": "MV","Mali": "ML","Malta": "MT","Marshall Islands": "MH","Martinique": "MQ","Mauritania": "MR","Mauritius": "MU","Mayotte": "YT","Mexico": "MX","Micronesia, Federated States of": "FM","Moldova, Republic of": "MD","Monaco": "MC","Mongolia": "MN","Montserrat": "MS","Morocco": "MA","Mozambique": "MZ","Myanmar": "MM","Namibia": "NA","Nauru": "NR","Nepal": "NP","Netherlands": "NL","Netherlands Antilles": "AN","New Caledonia": "NC","New Zealand": "NZ","Nicaragua": "NI","Niger": "NE","Nigeria": "NG","Niue": "NU","Norfolk Island": "NF","Northern Mariana Islands": "MP","Norway": "NO","Oman": "OM","Pakistan": "PK","Palau": "PW","Palestinian Territory, Occupied": "PS","Panama": "PA","Papua New Guinea": "PG","Paraguay": "PY","Peru": "PE","Philippines": "PH","Pitcairn": "PN","Poland": "PL","Portugal": "PT","Puerto Rico": "PR","Qatar": "QA","Reunion": "RE","Romania": "RO","Russia": "RU","Rwanda": "RW","Saint Helena": "SH","Saint Kitts and Nevis": "KN","Saint Lucia": "LC","Saint Pierre and Miquelon": "PM","Saint Vincent and the Grenadines": "VC","Samoa": "WS","San Marino": "SM","Sao Tome and Principe": "ST","Saudi Arabia": "SA","Senegal": "SN","Serbia and Montenegro": "CS","Seychelles": "SC","Sierra Leone": "SL","Singapore": "SG","Slovakia": "SK","Slovenia": "SI","Solomon Islands": "SB","Somalia": "SO","South Africa": "ZA","South Georgia and the South Sandwich Islands": "GS","Spain": "ES","Sri Lanka": "LK","Sudan": "SD","Suriname": "SR","Svalbard and Jan Mayen": "SJ","Swaziland": "SZ","Sweden": "SE","Switzerland": "CH","Syrian Arab Republic": "SY","Taiwan, Province of China": "TW","Tajikistan": "TJ","Tanzania, United Republic of": "TZ","Thailand": "TH","Timor-Leste": "TL","Togo": "TG","Tokelau": "TK","Tonga": "TO","Trinidad and Tobago": "TT","Tunisia": "TN","Turkey": "TR","Turkmenistan": "TM","Turks and Caicos Islands": "TC","Tuvalu": "TV","Uganda": "UG","Ukraine": "UA","United Arab Emirates": "AE","United Kingdom": "GB","United States": "US","United States Minor Outlying Islands": "UM","Uruguay": "UY","Uzbekistan": "UZ","Vanuatu": "VU","Venezuela": "VE","Viet Nam": "VN","Virgin Islands, British": "VG","Virgin Islands, U.S.": "VI","Wallis and Futuna": "WF","Western Sahara": "EH","Yemen": "YE","Zambia": "ZM","Zimbabwe": "ZW"};

// enhance world_data with country shortcode
for (let i in world_data) {
  world_data[i].shortcode = flagDict[world_data[i].name];
}

// enable property name layers
let namingDictSelection = { "birth_rate_per_1000": "Birth rate", "cell_phones_per_100": "Cell phones", "children_per_woman": "Fertility", "electricity_consumption_per_capita": "Electricity consumption", "gdp_per_capita": "GDP", "gdp_per_capita_growth": "GDP growth", "inflation_annual": "Inflation", "internet_user_per_100": "Internet usage", "life_expectancy": "Life expectancy", "military_expenditure_percent_of_gdp": "Military expenditure" }
let namingDictVerbose = { "id": "ID", "name": "Country Name", "birth_rate_per_1000": "Birth Rate (per 1000 Inhabitants)", "cell_phones_per_100": "Cell Phones (per 100 Inhabitants)", "children_per_woman": "Children per Woman", "electricity_consumption_per_capita": "Electricity Consumption (kWh, per capita)", "gdp_per_capita": "GDP ($, per capita)", "gdp_per_capita_growth": "GDP Growth (%, per capita)", "inflation_annual": "Annual Inflation (%)", "internet_user_per_100": "Internet Users (%)", "life_expectancy": "Average Life Expectancy (Years)", "military_expenditure_percent_of_gdp": "Military Expenditure (% of GDP)", "gps_lat": "GPS Latitude", "gps_long": "GPS Longitude" }

// extract properties
let props = [];
for (let k in world_data[0]) {
  let prop = new Object();
  if (typeof namingDictSelection[k] != 'undefined') {
    prop.selection = namingDictSelection[k];
  };
  if (typeof namingDictVerbose[k] != 'undefined') {
    prop.verbose = namingDictVerbose[k];
  };
  prop.technical = k;
  props.push(prop);
};

// setup
let options = [];
let margin = { top: 20, right: 30, bottom: 100, left: 50 },
    width = 550 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;
let chart_1, chart_2;
const position_1 = '#barchart_1';
const position_2 = '#barchart_2';
let map;
let marker;
let markers = {};
const marker_selected = 'hue-rotate(185deg) brightness(1.3)';
const marker_unselected = 'hue-rotate(240deg) brightness(1.3)';
const flagURL = "https://purecatamphetamine.github.io/country-flag-icons/3x2/";

// function to sort barchart
function sortJSON(chart) {
    if (chart.mode == "ABC") {
        return world_data.sort(function (a, b) { return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0)); });
    } else {
        return world_data.sort(function (a, b) {
            let x = parseFloat(a[chart.technical]); let y = parseFloat(b[chart.technical]);
            if (chart.mode === "123") { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            if (chart.mode === "321") { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
            if (chart.mode === "ABC") { return (0); }
        });
    }
}
function getDataView(chart) {
    chart.selection = String($(chart.position).parent().parent().find('option:selected').text());
    chart.mode = String($(chart.position).parent().parent().find('input:checked').val());
    chart.verbose = props.find((prop) => prop.selection === chart.selection).verbose;
    chart.technical = props.find((prop) => prop.selection === chart.selection).technical;
    chart.data = sortJSON(chart);
}

function outlineBarchart(position) {
    let chart = new Object();
    chart.position = position;
    chart.svg = d3.select(position).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "barchart")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    chart.x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.5);
    chart.xAxis = chart.svg.append("g")
        .attr("class", "x_axis")
        .append("line");
    chart.y = d3.scaleLinear()
        .range([height, 0])
    chart.yAxis = chart.svg.append("g")
        .attr("class", "y_axis");
    chart.title = chart.svg.append("text")
        .attr("class", "chart_title")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "9px")
        .style("font-style", "italic");
    chart.xLabels = chart.svg.append("g")
        .attr("class", "x_labels");

    updateBarchartAndMarkers(chart);
    return chart;
}

function updateBarchartAndMarkers(chart) {
    getDataView(chart);
    chart.x.domain(chart.data.map(function (d) { return d.name; }));
    chart.xAxis.attr("y1", chart.y(0))
        .attr("y2", chart.y(0))
        .attr("x1", 0)
        .attr("x2", width);
    chart.xAxis.transition().duration(600).call(d3.axisBottom().scale(chart.x));
    chart.xLabels.attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom().scale(chart.x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    chart.y.domain([Math.min(0, d3.min(chart.data, function (d) { return parseFloat(d[chart.technical]); })), d3.max(chart.data, function (d) { return parseFloat(d[chart.technical]); })])
        .nice();
    chart.yAxis.transition().duration(600).call(d3.axisLeft().scale(chart.y));

    chart.title.text(chart.verbose);

    let v = chart.svg.selectAll("rect")
        .data(chart.data)

    v.enter()
        .append("rect")
        .merge(v)
        .on("mouseover", function () {
            d3.selectAll('#' + this.id)
                .attr("class", "bar barhover");
            markers[this.id].valueOf()._icon.style.filter = marker_selected;
        })
        .on("mouseout", function () {
            d3.selectAll('#' + this.id)
                .each(function () {
                    let val = d3.select(this).attr("val");
                    d3.select(this)
                        .attr("class", function (d) { return val < 0 ? "bar negative" : "bar positive"; });
                });
            markers[this.id].valueOf()._icon.style.filter = marker_unselected;
        })
        .on("click", function () {
            let lat = parseFloat(world_data.find((data) => data.shortcode === this.id).gps_lat) - 8;
            let long = parseFloat(world_data.find((data) => data.shortcode === this.id).gps_long);
            map.setView([lat, long], 3);
            markers[this.id].openPopup();
        })
        .transition()
        .duration(600)
        .attr("class", function (d) { return d[chart.technical] < 0 ? "bar negative" : "bar positive"; })
        .attr("id", function (d) { return (d.shortcode); })
        .attr("val", function (d) { return d[chart.technical]; })
        .attr("y", function (d) { return chart.y(Math.max(0, parseFloat(d[chart.technical]))); })
        .attr("x", function (d) { return chart.x(d.name); })
        .attr("height", function (d) { return Math.abs(chart.y(d[chart.technical]) - chart.y(0)); })
        .attr("width", chart.x.bandwidth());

    v.exit()
        .remove();
}

for (let prop in props) {
    if (typeof props[prop].selection != 'undefined') {
        option = props[prop].selection;
        options.push(option);
        $('#selection_bar1').append($('<option></option>').val(option).html(option));
        $('#selection_bar2').append($('<option></option>').val(option).html(option));
    }
}
$('#selection_bar1').val(options[0]);
$('#selection_bar2').val(options[1]);

chart_1 = outlineBarchart(position_1);
chart_2 = outlineBarchart(position_2);

map = L.map('map').setView([35, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

for (let i in world_data) {
    marker = L.marker([parseFloat(world_data[i].gps_lat), parseFloat(world_data[i].gps_long)]).addTo(map);
    marker.valueOf()._icon.style.filter = marker_unselected;
    let shortcode = world_data[i].shortcode;
    marker.on('mouseover', function () {
        this.valueOf()._icon.style.filter = marker_selected;
        d3.selectAll('#' + shortcode)
            .attr("class", "bar barhover");
    });
    marker.on('mouseout', function () {
        this.valueOf()._icon.style.filter = marker_unselected;
        d3.selectAll('#' + shortcode)
            .each(function () {
                let val = d3.select(this).attr("val");
                d3.select(this)
                    .attr("class", function (d) { return val < 0 ? "bar negative" : "bar positive"; });
            });
    });
    marker.on('click', function () {
        this._popup.setContent("<img src=" + flagURL + world_data[i].shortcode + ".svg height=\"12px\" width=\"18px\"/>  <strong>" + world_data[i].name + "</strong><hr><i>" + chart_1.verbose + "</i>: <strong>" + parseFloat(world_data[i][chart_1.technical]).toFixed(2) + "</strong><br><i>" + chart_2.verbose + "</i>: <strong>" + parseFloat(world_data[i][chart_2.technical]).toFixed(2) + "</strong>");
        let lat = parseFloat(world_data[i].gps_lat);
        let long = parseFloat(world_data[i].gps_long);
        map.setView([lat, long], 2);
    });
    marker.bindPopup("<img src=" + flagURL + world_data[i].shortcode + ".svg height=\"12px\" width=\"18px\"/>  <strong>" + world_data[i].name + "</strong><hr><i>" + chart_1.verbose + "</i>: <strong>" + parseFloat(world_data[i][chart_1.technical]).toFixed(2) + "</strong><br><i>" + chart_2.verbose + "</i>: <strong>" + parseFloat(world_data[i][chart_2.technical]).toFixed(2) + "</strong>");
    markers[world_data[i].shortcode] = marker;
}

$('#selection_bar1').on('change', function () {
    updateBarchartAndMarkers(chart_1);
});

$('#selection_bar2').on('change', function () {
    updateBarchartAndMarkers(chart_2);
});

$('#radio_1').on('change', function () {
    updateBarchartAndMarkers(chart_1);
});

$('#radio_2').on('change', function () {
    updateBarchartAndMarkers(chart_2);
});
