// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

import './plugins/advlist/plugin.min.js'
import './plugins/anchor/plugin.min.js'
import './plugins/autolink/plugin.min.js'
import './plugins/autosave/plugin.min.js'
import './plugins/code/plugin.min.js'
import './plugins/codesample/plugin.min.js'
import './plugins/directionality/plugin.min.js'
import './plugins/emoticons/plugin.min.js'
import './plugins/emoticons/js/emojis.js'
import './plugins/fullscreen/plugin.min.js'
import './plugins/hr/plugin.min.js'
import './plugins/image/plugin.min.js'
import './plugins/imagetools/plugin.min.js'
import './plugins/insertdatetime/plugin.min.js'
import './plugins/link/plugin.min.js'
import './plugins/lists/plugin.min.js'
import './plugins/media/plugin.min.js'
import './plugins/nonbreaking/plugin.min.js'
import './plugins/noneditable/plugin.min.js'
import './plugins/pagebreak/plugin.min.js'
import './plugins/paste/plugin.min.js'
import './plugins/preview/plugin.min.js'
import './plugins/print/plugin.min.js'
import './plugins/save/plugin.min.js'
import './plugins/searchreplace/plugin.min.js'
import './plugins/spellchecker/plugin.min.js'
import './plugins/tabfocus/plugin.min.js'
import './plugins/table/plugin.min.js'
import './plugins/template/plugin.min.js'
import './plugins/textpattern/plugin.min.js'
import './plugins/visualblocks/plugin.min.js'
import './plugins/visualchars/plugin.min.js'
import './plugins/wordcount/plugin.min.js'
import './plugins/fullpage/plugin.min.js'

// const plugins = ['fullpage advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount']
const plugins = 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern emoticons autosave'

export default plugins