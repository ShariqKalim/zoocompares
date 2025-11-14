import { Globe, Shield, TrendingUp, CreditCard, Zap, Home, Code, Briefcase, DollarSign, Wallet, BarChart3, PieChart, LineChart, TrendingDown, Building2, Cpu, Database, Server, Smartphone, Tablet, Laptop, Monitor, Wifi, Router, Lock, LockOpen, Key, Eye, EyeOff, AlertTriangle, AlertCircle, Fingerprint, ShoppingCart, ShoppingBag, Package, Tag, Percent, Gift, Heart, Star, Mail, MessageSquare, Phone, PhoneCall, Send, Rss, Volume2, Bell, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft, Compass, Maximize, Minimize, Settings, PenTool as Tool, Wrench, Edit, Trash2, Download, Upload, Copy, Search, Filter, Layers, Grid, List, Menu, X, Plus, Minus, Check, CheckCircle, Circle, Square, Calendar, Clock, Music, Film, Image, Video, Play, Pause, SquareIcon, Maximize2, Minimize2, Printer, Combine as Mobile, TabletIcon, Watch, BookOpen, Book, Bookmark, Flag, MapPin, Map, Navigation, CompassIcon, LogOut, LogIn, User, Users, UserPlus, UserCheck, UserX, AlertOctagon as UserOctagon, MailIcon, Archive, Trash, BarChart, LineChartIcon, PieChartIcon, AreaChart, Award, Trophy, Target, TrendingUpIcon, TrendingDownIcon, Activity, ZapIcon, Battery, WifiIcon, WifiOff, Signal, GitBranch, GitCommit, Github, Terminal, CodeIcon, Command, SmartphoneIcon, WatchIcon, Headphones, Mic, Wind, Cloud, CloudRain, CloudSnow, Sun, Moon, StarIcon, HeartIcon, Smile, Frown, Meh, EyeIcon, EyeOffIcon, InboxIcon, MessageCircle, MessageSquareDot as MessageDot, SendIcon, MailOpen, CopyIcon, Clipboard, ClipboardList, LayersIcon, Layout, Sliders, MaximizeIcon, MinimizeIcon, Maximize2Icon, Minimize2Icon, RotateCw, RotateCcw, RefreshCw, RefreshCcw, CheckIcon, XIcon, PlusIcon, MinusIcon, EditIcon, TrashIcon, DownloadIcon, UploadIcon, Save, SaveAll as SaveAs, ZoomInIcon, ZoomOutIcon, Slash, Hash, Asterisk, PercentIcon, DollarSignIcon, Euro, PoundSterling, CreditCardIcon, WalletIcon, ShoppingCartIcon, ShoppingBagIcon } from 'lucide-react';
import React from 'react';

export const ICON_TYPES = [
  'Globe', 'Shield', 'TrendingUp', 'CreditCard', 'Zap', 'Home', 'Code',
  'Briefcase', 'DollarSign', 'Wallet', 'BarChart3', 'PieChart', 'LineChart', 'TrendingDown', 'Building2',
  'Cpu', 'Database', 'Server', 'Smartphone', 'Tablet', 'Laptop', 'Monitor', 'Wifi', 'Router',
  'Lock', 'LockOpen', 'Key', 'Eye', 'EyeOff', 'AlertTriangle', 'AlertCircle', 'Fingerprint',
  'ShoppingCart', 'ShoppingBag', 'Package', 'Tag', 'Percent', 'Gift', 'Heart', 'Star',
  'Mail', 'MessageSquare', 'Phone', 'PhoneCall', 'Send', 'Rss', 'Volume2', 'Bell',
  'ArrowRight', 'ArrowLeft', 'ChevronRight', 'ChevronLeft', 'Compass', 'Maximize', 'Minimize',
  'Settings', 'Tool', 'Wrench', 'Edit', 'Trash2', 'Download', 'Upload', 'Copy', 'Search',
  'Filter', 'Layers', 'Grid', 'List', 'Menu', 'X', 'Plus', 'Minus', 'Check', 'CheckCircle',
  'Circle', 'Square', 'Calendar', 'Clock', 'Music', 'Film', 'Image', 'Video', 'Play', 'Pause',
  'Maximize2', 'Minimize2', 'Printer', 'Mobile', 'Watch', 'BookOpen', 'Book', 'Bookmark', 'Flag', 'MapPin',
  'Map', 'Navigation', 'LogOut', 'LogIn', 'User', 'Users', 'UserPlus', 'UserCheck', 'Archive',
  'Award', 'Trophy', 'Target', 'Activity', 'Battery', 'Signal', 'GitBranch', 'GitCommit', 'Github',
  'Terminal', 'Command', 'Headphones', 'Mic', 'Wind', 'Cloud', 'CloudRain', 'CloudSnow', 'Sun', 'Moon',
  'Smile', 'Frown', 'Meh', 'Clipboard', 'ClipboardList', 'Layout', 'Sliders', 'RotateCw', 'RotateCcw',
  'RefreshCw', 'RefreshCcw', 'Save', 'Hash', 'Asterisk', 'Euro', 'PoundSterling',
];

export const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  Globe, Shield, TrendingUp, CreditCard, Zap, Home, Code,
  Briefcase, DollarSign, Wallet, BarChart3, PieChart, LineChart, TrendingDown, Building2,
  Cpu, Database, Server, Smartphone, Tablet, Laptop, Monitor, Wifi, Router,
  Lock, LockOpen, Key, Eye, EyeOff, AlertTriangle, AlertCircle, Fingerprint,
  ShoppingCart, ShoppingBag, Package, Tag, Percent, Gift, Heart, Star,
  Mail, MessageSquare, Phone, PhoneCall, Send, Rss, Volume2, Bell,
  ArrowRight, ArrowLeft, ChevronRight, ChevronLeft, Compass, Maximize, Minimize,
  Settings, Tool, Wrench, Edit, Trash2, Download, Upload, Copy, Search,
  Filter, Layers, Grid, List, Menu, X, Plus, Minus, Check, CheckCircle,
  Circle, Square, Calendar, Clock, Music, Film, Image, Video, Play, Pause,
  Maximize2, Minimize2, Printer, Mobile, Watch, BookOpen, Book, Bookmark, Flag, MapPin,
  Map, Navigation, LogOut, LogIn, User, Users, UserPlus, UserCheck, Archive,
  Award, Trophy, Target, Activity, Battery, Signal, GitBranch, GitCommit, Github,
  Terminal, Command, Headphones, Mic, Wind, Cloud, CloudRain, CloudSnow, Sun, Moon,
  Smile, Frown, Meh, Clipboard, ClipboardList, Layout, Sliders, RotateCw, RotateCcw,
  RefreshCw, RefreshCcw, Save, Hash, Asterisk, Euro, PoundSterling,
};

export function getIconTypes() {
  return ICON_TYPES;
}
