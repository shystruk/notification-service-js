import template from './notification-service.template'
import CustomEvent from 'custom-event-js'

class Notification_Service extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.rootNode = this.shadowRoot.querySelector('.web-nc')
        this.crossImg = ''
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
        if (this.styleSrc) {
            this.attachLink()
        }

        if (this.crossImgSrc) {
            this.crossImg = this.getAttribute('cross-img-src')
        }
    }

    static get observedAttributes() {
        return ['style-src', 'cross-img-src']
    }

    get crossImgSrc() {
        return this.hasAttribute('cross-img-src')
    }

    get styleSrc() {
        return this.hasAttribute('style-src')
    }

    renderNotification(data) {
        var divNode

        if (data) {
            var div = document.createElement('div')
            div.setAttribute('class', `web-nc-content fadein ${data.type}`)
            div.innerHTML = `<span>${data.message}</span>`

            divNode = this.rootNode.appendChild(div)

            if (this.crossImg) {
                var img = document.createElement('img')
                img.setAttribute('src', this.crossImg)
                img.setAttribute('alt', '')
                img.addEventListener('click', () => divNode.parentNode.removeChild(divNode))

                divNode.appendChild(img)
            }

            setTimeout(() => {
                divNode.className += ' fadeout'
                setTimeout(() => divNode.parentNode.removeChild(divNode), 1200)
            }, data.timer || 5000)
        }
    }

    attachLink() {
        var link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', this.getAttribute('style-src'))
        this.rootNode.parentNode.insertBefore(link, this.rootNode)
    }
}

export default customElements.define('notification-service', Notification_Service)
