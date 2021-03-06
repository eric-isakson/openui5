/*!
 * ${copyright}
 */
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	 * @class ResponsiveFlowLayout renderer.
	 * @static
	 */
	var ResponsiveFlowLayoutRenderer = {};
	
	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 * 
	 * @param {sap.ui.core.RenderManager}
	 *            oRm the RenderManager that can be used for writing to the render
	 *            output buffer
	 * @param {sap.ui.core.Control}
	 *            oControl an object representation of the control that should be
	 *            rendered
	 */
	(function() {
		ResponsiveFlowLayoutRenderer.render = function(oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("sapUiRFL");
			oRm.writeClasses();
			oRm.write(">"); // div element
	
			// rendering of content happens in oControl.fnRenderContent
	
			oRm.write("</div>");
		};
	}());
	

	return ResponsiveFlowLayoutRenderer;

}, /* bExport= */ true);
