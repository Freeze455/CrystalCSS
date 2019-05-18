class notify {

    private target: string

    constructor (target: string)
    {
        this.target = target
    }

    getInfo () {
        return {
            target: this.target,
        }
    }
    
    initialize () {
        const element: any = document.querySelector(this.target)
    
        element.className = element.className += " show"

        setTimeout(() => {
            element.className = element.className.replace(" show", "")
        }, 3000)
    }
}

