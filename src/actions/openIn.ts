import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Open In
 * @section Content Types > Apps >
 * @icon Apps
 *
 * Opens the input in the specified app.
 *
 * ```js
 * openIn({
 *   appId: 'com.christianselig.Apollo'
 * });
 * ```
 */

const openIn = (
  {
    appId = '',
  }: {
    /** The App identifier */
    appId?: string;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.openin',
  WFWorkflowActionParameters: {
    WFOpenInAppIdentifier: appId,
  },
});

export default openIn;
