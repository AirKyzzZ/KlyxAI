import { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough, 
  List, 
  ListOrdered, 
  Quote, 
  Code,
  Image as ImageIcon,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo
} from 'lucide-react'

export default function SiteEditor({ content, onContentChange }) {
  const [showImageDialog, setShowImageDialog] = useState(false)
  const [showLinkDialog, setShowLinkDialog] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!editor) {
    return null
  }

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
      setImageUrl('')
      setShowImageDialog(false)
    }
  }

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run()
      setLinkUrl('')
      setLinkText('')
      setShowLinkDialog(false)
    }
  }

  const MenuBar = () => {
    return (
      <div className="border-b border-gray-200 p-4 bg-white">
        <div className="flex flex-wrap items-center gap-2">
          {/* Annuler/Rétablir */}
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
          >
            <Redo className="w-4 h-4" />
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          {/* Texte en gras */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 ${editor.isActive('bold') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Bold className="w-4 h-4" />
          </button>

          {/* Texte en italique */}
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 ${editor.isActive('italic') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Italic className="w-4 h-4" />
          </button>

          {/* Texte souligné */}
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 ${editor.isActive('underline') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Underline className="w-4 h-4" />
          </button>

          {/* Texte barré */}
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 ${editor.isActive('strike') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          {/* Alignement */}
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-2 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-2 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-2 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <AlignRight className="w-4 h-4" />
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          {/* Listes */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 ${editor.isActive('bulletList') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 ${editor.isActive('orderedList') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          {/* Citation */}
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`p-2 ${editor.isActive('blockquote') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Quote className="w-4 h-4" />
          </button>

          {/* Code */}
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`p-2 ${editor.isActive('code') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Code className="w-4 h-4" />
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          {/* Image */}
          <button
            onClick={() => setShowImageDialog(true)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <ImageIcon className="w-4 h-4" />
          </button>

          {/* Lien */}
          <button
            onClick={() => setShowLinkDialog(true)}
            className={`p-2 ${editor.isActive('link') ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <LinkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <MenuBar />
      
      <div className="p-4 min-h-[400px]">
        <EditorContent editor={editor} className="prose max-w-none" />
      </div>

      {/* Dialog Image */}
      {showImageDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Ajouter une image</h3>
            <input
              type="url"
              placeholder="URL de l'image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="input-field mb-4"
            />
            <div className="flex space-x-3">
              <button
                onClick={addImage}
                className="btn-primary"
              >
                Ajouter
              </button>
              <button
                onClick={() => setShowImageDialog(false)}
                className="btn-secondary"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dialog Lien */}
      {showLinkDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Ajouter un lien</h3>
            <input
              type="url"
              placeholder="URL du lien"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="input-field mb-4"
            />
            <input
              type="text"
              placeholder="Texte du lien (optionnel)"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              className="input-field mb-4"
            />
            <div className="flex space-x-3">
              <button
                onClick={addLink}
                className="btn-primary"
              >
                Ajouter
              </button>
              <button
                onClick={() => setShowLinkDialog(false)}
                className="btn-secondary"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 