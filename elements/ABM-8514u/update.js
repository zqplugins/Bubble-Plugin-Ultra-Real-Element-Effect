function(instance, properties, context) {
    if (!properties.bevelelementid) {
        context.reportDebugger("'Elements ID' field is empty!");
        return;
    }
    if (!properties.bevelname) {
        context.reportDebugger("'Bevel Name' field is empty!");
        return;
    }
    if (!properties.cssProperties) {
        context.reportDebugger("'CSS code' field is empty!");
        return;
    }

    var cssNoBreakLine = properties.cssProperties.replace(/(\r\n|\n|\r)/gm, "");
    var cssNoSpace = cssNoBreakLine.replace(/\s+/g, ' ').trim();
    
    const bevelCSS = `.${properties.bevelname} {
        ${cssNoSpace}
    }`;
    
    try {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = bevelCSS;
        
        document.getElementsByTagName('head')[0].appendChild(style);
    } catch (error) {
        context.reportDebugger(error.message);
    }
    
    var idStrings = properties.bevelelementid
    var idArray = idStrings.toString().split(',');
    
    idArray.forEach((id)=> {
        const element = document.getElementById(id.replace(/\s/g, ''));
        
        if (!element) {
            context.reportDebugger(`The element with id '${id}' not found!`);
            return;
        }

        element.className += ' '+properties.bevelname+'';
    });
}