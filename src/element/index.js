import { Button, Message, Form, FormItem, MessageBox, Notification, Popover, Tag, Input } from 'element-ui'

const MsgBox = MessageBox

const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Message)
    Vue.use(MessageBox)
    Vue.use(Notification)
    Vue.use(Popover)
    Vue.use(Tag)
    Vue.use(Input)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.prototype.$msgbox = MsgBox
    Vue.prototype.$alert = MsgBox.alert
    Vue.prototype.$confirm = MsgBox.confirm
    Vue.prototype.$prompt = MsgBox.prompt
    Vue.prototype.$message = Message
    Vue.prototype.$notify = Notification
    Vue.prototype.$ELEMENT = { size: 'default', zIndex: 3000 }
  }
}

export default element
