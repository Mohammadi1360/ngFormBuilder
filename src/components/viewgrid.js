var _clone = require('lodash/clone');

module.exports = function (app) {
  app.config([
    'formioComponentsProvider',
    function (formioComponentsProvider) {
      formioComponentsProvider.register('viewgrid', {
        fbtemplate: 'formio/components/viewgrid.html',
        template: 'formio/components/viewgrid.html',
        title: 'View Grid',
        icon: 'fa fa-tasks',
        views: [
          {
            name: 'Display',
            template: 'formio/components/viewgrid/display.html'
          }
        ],
        settings: {
          input: true,
          tableView: true,
          label: 'View Grid',
          key: '',
          theme: 'default',
          size: 'md',
          protected: false,
          unique: false,
          persistent: true
        }
      });
    }
  ]);

  app.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('formio/components/viewgrid/display.html',

        '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="href" label="Href"></form-builder-option>' +
        '<form-builder-option property="reloadTopic" label="Reload Topic"></form-builder-option>' +
        '<form-builder-option property="hideLabel"></form-builder-option>' +
        '<form-builder-option property="tooltip"></form-builder-option>' +
        '<form-builder-option property="customClass"></form-builder-option>' +
        '<form-builder-option property="striped"></form-builder-option>' +
        '<form-builder-option property="bordered"></form-builder-option>' +
        '<form-builder-option property="hover"></form-builder-option>' +
        '<form-builder-option property="condensed"></form-builder-option>' +
        '<form-builder-option property="hideLabel"></form-builder-option>' +
        '<form-builder-option property="tableView"></form-builder-option>' +
        '<form-builder-option property="hidden"></form-builder-option>' +
        '<form-builder-option property="disabled"></form-builder-option>' +
        '</ng-form>'
      );

      $templateCache.put('formio/components/viewgrid.html',
        '<label ng-if="component.label" for="{{ component.key }}">{{ component.label }}</label>' +
        '<label ng-if="component.href" for="{{ component.key }}">{{ component.href }}</label>' +
        '<div class="btn-group" role="group" id="{{ component.key }}">' +
        '<button type="button" class="btn btn-{{ component.theme }} btn-{{ component.size }}" ng-disabled="readOnly || form.submitting || (component.disableOnInvalid && form.$invalid)" ng-repeat="value in component.values" ng-click="$emit(value.value)">{{ value.label }}</button>' +
        '</div>'
      );



      var url = 'http://localhost:3000/list' ;
      var header = new Headers({
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8'
      });

      var options = {
        method: 'GET',
        headers: header,
        mode: 'no-cors'
      };

      console.log('==================== HERE ===============================');

      // if (data) {
      //   options.body = JSON.stringify(data);
      // }

      // Allow plugins to alter the options.
      // options = Formio.pluginAlter('requestOptions', options, url);

      fetch(url, options).then(function (response) {
        console.log(response);
      }).then(function (result) {
          console.log(result);
      }).catch(function (err) {
        console.log(err);
      });

      // var data = Formio.request(url, 'get', '', header, '');

      var tableClasses = "{'table-striped': component.striped, ";
      tableClasses += "'table-bordered': component.bordered, ";
      tableClasses += "'table-hover': component.hover, ";
      tableClasses += "'table-condensed': component.condensed}";

      var gridTemplate = '<table>' +
            '<tbody>' +
            '<tr ng-repeat="row in [1,2,3]">' +
            '<td>{{row}}</td>' +
            '<td><span ng-if="component.href">{{component.href}}</span></td>' +
            '<td><span ng-if="component.reloadTopic">{{component.reloadTopic}}</span></td>' +
            '</tr>' +
            '</tbody>' +
          '</table>';

      var gridTemplate1 = '<div class="table-responsive">' +
        '<table ng-class="' + tableClasses + '" class="table">' +
        '<thead><tr>' +
        '<th ng-repeat="header in [1,2,3]"> header_{{ header }}</th>' +
        '</tr></thead>' +
        '<tbody>' +
        '<tr ng-repeat="row in [1,2,3]">' +
        '<td ng-repeat="col in [11,22,33]">' +
        'val_{{col}}' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' ;

      var gridTemplate2 = '<table id="example" class="table table-striped table-bordered" style="width:100%">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>Tiger Nixon</td>\n' +
        '                <td>System Architect</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2011/04/25</td>\n' +
        '                <td>$320,800</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Donna Snider</td>\n' +
        '                <td>Customer Support</td>\n' +
        '                <td>New York</td>\n' +
        '                <td>27</td>\n' +
        '                <td>2011/01/25</td>\n' +
        '                <td>$112,000</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </tfoot>\n' +
        '    </table>';

      $templateCache.put('formio/components/viewgrid.html',
        gridTemplate1
      );

    }
  ]);
};
