import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <section className="content">
      <h1>Nested Callbacks</h1>
      <ul>
        <li>Also called as "callback hell"</li>
      </ul>
      <pre>
        <code>
          <div dangerouslySetInnerHTML={{__html: "var allTheCustomerThings;"}} />
          <div dangerouslySetInnerHTML={{__html: "$('#getCustomer').click(function (cust) {"}} />
          <div dangerouslySetInnerHTML={{__html: "  var id = $('#cust-id').val();"}} />
          <div dangerouslySetInnerHTML={{__html: "  getCustomer(id, function (cust) {"}} />
          <div dangerouslySetInnerHTML={{__html: "    allTheCustomerThings = cust;"}} />
          <div dangerouslySetInnerHTML={{__html: "    getContacts(id, function (contacts) {"}} />
          <div dangerouslySetInnerHTML={{__html: "      allTheCustomerThings.contacts = contacts;"}} />
          <div dangerouslySetInnerHTML={{__html: "      getOrders(id, function (orders) {"}} />
          <div dangerouslySetInnerHTML={{__html: "        allTheCustomerThings.orders = orders;"}} />
          <div dangerouslySetInnerHTML={{__html: "        getAccountsRecv(id, function (ar) {"}} />
          <div dangerouslySetInnerHTML={{__html: "          allTheCustomerThings.ar = ar;"}} />
          <div dangerouslySetInnerHTML={{__html: "          // OK - we got all the data, NOW WHAT?! :-)"}} />
          <div dangerouslySetInnerHTML={{__html: "        });"}} />
          <div dangerouslySetInnerHTML={{__html: "      });"}} />
          <div dangerouslySetInnerHTML={{__html: "    });"}} />
          <div dangerouslySetInnerHTML={{__html: "  });"}} />
          <div dangerouslySetInnerHTML={{__html: "});"}} />
        </code>
      </pre>
    </section>
  }
}
