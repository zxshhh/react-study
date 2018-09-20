<!-- DOCTYPE
  # <!DOCTYPE>声明必须是html文档的第一行，位于<html>标签之前。
  # <!DOCTYPE>声明不是html标签，它是指示web浏览器使用哪个html版本进行编码的指令
  # 在html4.01中，<!DOCTYPE>声明引用DTD，因为html4.01基于SGML。DTD规定了标记语言的规则，这样浏览器才能正确地呈现内容。
  ## <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  # html5不基于SGML,所以不需要引用DTD。
  ## <!DOCTYPE html>
 -->

<!-- 伪类和为元素
  # 伪类：以(:)为前缀追加到一个选择器末尾的关键字，当你希望样式在特定情况下才呈现到指定的元素时，可以在选择器后面加上对应的伪类。:hover   :visited  :nth-child() :empty  等等

  # 伪元素：和伪类很像，也是以(::)为前缀添加到一个选择器的后面  并且去选择某个元素的某个部分。 ::after   ::before  ::first-letter  ::first-line  ::selection   ::backdrop   等等
 -->