import template from './notification-service.template'
import CustomEvent from 'custom-event-js'

class Notification_Service extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.rootNode = this.shadowRoot.querySelector('.web-nc')
    }

    connectedCallback() {
        CustomEvent.ON('WEB_COMP_SHOW_NOTIFICATION', (data) => {
            this.renderNotification(data && data.detail)
        })
    }

    disconnectedCallback() {
        CustomEvent.OFF('WEB_COMP_SHOW_NOTIFICATION')
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.attachLink()
    }

    static get observedAttributes() {
        return ['style-src'];
    }

    get styleSrc() {
        return this.hasAttribute('style-src')
    }

    renderNotification(data) {
        if (data) {
            let div = document.createElement('div')
            div.setAttribute('class', `web-nc-content fadein ${data.type}`)
            div.innerHTML = `<span>${data.message}</span>`

            let divNode = this.rootNode.appendChild(div)

            setTimeout(() => {
                divNode.className += ' fadeout'
                setTimeout(() => divNode.parentNode.removeChild(divNode), 1200)
            }, data.timer || 5000)
        }
    }

    attachLink() {
        if (this.styleSrc) {
            var link = document.createElement('link')
            link.setAttribute('rel', 'stylesheet')
            link.setAttribute('href', this.getAttribute('style-src'))
            this.rootNode.parentNode.insertBefore(link, this.rootNode)
        }
    }
}

customElements.define('notification-service', Notification_Service)
