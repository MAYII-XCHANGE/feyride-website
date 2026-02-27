import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Headset, Mail, MessageCircle, Phone, RotateCcw, X } from 'lucide-react';

const quickQuestions = [
  {
    label: 'How do I find a ride?',
    response:
      "Open the app, choose your pickup and destination, then book from available hosts on your route.",
  },
  {
    label: 'How do I become a host?',
    response:
      'Register as a host, complete verification, post your route, and start accepting ride requests.',
  },
  {
    label: 'How do payouts work?',
    response:
      'Host payouts are processed securely to your registered bank account based on completed trips.',
  },
];

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hi there. Welcome to FeyRide Support.',
  },
  {
    id: 2,
    sender: 'bot',
    text: 'How can we help you today?',
  },
];

const supportActions = [
  {
    href: 'https://wa.me/2349059773535',
    label: 'Chat on WhatsApp',
    icon: MessageCircle,
    primary: true,
    external: true,
  },
  {
    href: 'tel:07000700080',
    label: 'Call 0700 0700 080',
    icon: Phone,
    primary: false,
    external: false,
  },
  {
    href: 'mailto:support@feyride.com',
    label: 'support@feyride.com',
    icon: Mail,
    primary: false,
    external: false,
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const panelRef = useRef(null);
  const messagesEndRef = useRef(null);

  const showQuickQuestions = useMemo(
    () => messages.length <= initialMessages.length && !isTyping,
    [messages.length, isTyping],
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        const launcher = document.querySelector('[data-support-launcher]');
        if (launcher && !launcher.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: question.label,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: question.response,
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const handleRestart = () => {
    setMessages(initialMessages);
    setIsTyping(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 right-3 bottom-20 md:right-6 md:bottom-24">
          <div
            ref={panelRef}
            className="w-[min(23rem,calc(100vw-1.5rem))] max-h-[80vh] overflow-hidden rounded-2xl border border-nova-charcoal-lighter bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="bg-nova-charcoal text-white px-4 py-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white/10 inline-flex items-center justify-center">
                  <Headset size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">FeyRide Support</p>
                  <p className="text-xs text-white/80">Online now</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Restart chat"
                  title="Restart chat"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                  title="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-nova-charcoal-light overflow-y-auto max-h-[50vh] space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2.5 text-sm leading-relaxed ${
                      message.sender === 'user'
                        ? 'bg-nova-green text-nova-charcoal rounded-br-md'
                        : 'bg-white text-nova-charcoal rounded-bl-md border border-nova-charcoal-lighter'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="inline-flex items-center gap-1 bg-white border border-nova-charcoal-lighter rounded-2xl px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nova-charcoal-700 animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-nova-charcoal-700 animate-bounce"
                    style={{ animationDelay: '0.12s' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-nova-charcoal-700 animate-bounce"
                    style={{ animationDelay: '0.24s' }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-nova-charcoal-lighter bg-white space-y-3">
              {showQuickQuestions && (
                <div className="space-y-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question.label}
                      type="button"
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left rounded-lg border border-nova-charcoal-lighter px-3 py-2 text-sm text-nova-charcoal hover:bg-nova-charcoal-light transition-colors"
                    >
                      {question.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-2">
                {supportActions.map((action) => {
                  const ActionIcon = action.icon;
                  const classes = action.primary
                    ? 'bg-nova-green text-nova-charcoal font-semibold hover:bg-nova-green-dark hover:text-white'
                    : 'border border-nova-charcoal-lighter text-nova-charcoal font-medium hover:bg-nova-charcoal-light';

                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.external ? '_blank' : undefined}
                      rel={action.external ? 'noreferrer' : undefined}
                      className={`w-full rounded-lg px-3 py-2.5 inline-flex items-center justify-center gap-2 text-sm transition-colors ${classes}`}
                    >
                      <ActionIcon size={16} />
                      {action.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-1 text-center">
                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-nova-charcoal-700 hover:text-nova-green transition-colors"
                >
                  Visit Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        data-support-launcher
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed z-50 right-4 bottom-4 h-12 w-12 md:h-14 md:w-auto md:right-6 md:bottom-6 rounded-full bg-nova-charcoal text-white px-0 md:px-5 inline-flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(0,0,0,0.22)] hover:bg-black transition-colors"
        aria-expanded={isOpen}
        aria-label="Open support chat"
      >
        <MessageCircle size={18} />
        <span className="hidden md:inline text-sm font-semibold">Support</span>
      </button>
    </>
  );
}
