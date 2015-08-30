## Properties
- `type` (`?:string='warning'`) - provide one of the four supported, contextual classes:
`success`,`info`, `warning` - default, `danger`
- `dismissible` (`?:boolean=false`) - determines if an inline close button is displayed
- `dismiss-on-timeout` (`?number=0`) - number of milliseconds, if specified sets a timeout duration, after which the alert will be closed
- `template-url` (*not yet supported*) - allows to provide message template

## Events
- `close` - fired when `alert` closed with inline button or by timeout, `$event` is an instance of `alert` component

*Will be deprecated*: The presence of the `(close)` event handler determines
if a close button is displayed, use `dismissible` instead

