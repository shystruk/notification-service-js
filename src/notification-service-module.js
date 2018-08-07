import template from './notification-service.template'
import CustomEvent from 'custom-event-js'

class Notification_Service extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.root = this.shadowRoot.querySelector('.web-nc')
    }

    connectedCallback() {
        CustomEvent.ON('WEB_COMP_SHOW_NOTIFICATION', (data) => {
            this.renderNotification(data && data.detail)
        })
    }

    disconnectedCallback() {
        CustomEvent.OFF('WEB_COMP_SHOW_NOTIFICATION')
    }

    renderNotification(data) {
        if (data) {
            let div = document.createElement('div')
            div.setAttribute('class', `web-nc-content fadein ${data.type}`)
            div.innerHTML = `<span>${data.message}</span>`

            let divNode = this.root.appendChild(div)

            setTimeout(() => {
                divNode.className += ' fadeout'
                setTimeout(() => divNode.remove(), 1200)
            }, data.timer || 5000)
        }
    }
}

export default customElements.define('notification-service', Notification_Service)
