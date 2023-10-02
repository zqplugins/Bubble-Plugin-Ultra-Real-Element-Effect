function(properties, context) {
    if (!properties.glasselementid) {
        context.reportDebugger("'Elements ID' field is empty!");
        return;
    }
    if (!properties.glassname) {
        context.reportDebugger("'Glass effect name' field is empty!");
        return;
    }

    var idStrings = properties.glasselementid;
    var idArray = idStrings.toString().split(',');

    idArray.forEach((id) => {
        const element = document.getElementById(id.replace(/\s/g, ''));

        if (!element) {
            context.reportDebugger(`The element with id '${id}' not found!`);
            return;
        }
        
        element.classList.remove(properties.glassname);
    });
}