// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'widget-angular';

  ngOnInit() {
    (function () {
      var w = window,
        d = document,
        z = w.NeetoChat || {};
      z.subdomain = 'spinkart';
      z.chatApiKey = 'kWJCAyH4JbWF3Opx';
      z.neetoChatBaseUrl = 'https://spinkart.neetochat.net';
      z.neetoKbBaseUrl = 'https://spinkart.neetokb.net';
      z.neetoDeskBaseUrl = 'https://spinkart.neetodesk.net';
      w.NeetoChat = z;
      var inserted = false;
      function insertTag() {
        if (inserted) return;
        inserted = true;
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src =
          'https://neeto-chat-widget-production-v1.s3.amazonaws.com/bundle-loader.js';
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
      if (document.readyState != 'loading') {
        insertTag();
      } else {
        document.onreadystatechange = function () {
          if (document.readyState != 'loading') insertTag();
        };
      }
    })();
  }
}
