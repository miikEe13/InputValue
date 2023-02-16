<?php
namespace ChatGpt\InputValue\Block;

class Chat extends \Magento\Framework\View\Element\Template
{
    /**      
     * @param \Magento\Framework\View\Element\Template\Context $context      
     * */
	public function __construct(
        \Magento\Framework\View\Element\Template\Context $context
    )
	{
		parent::__construct($context);
	}

	public function _prepareLayout()
    {
        return parent::_prepareLayout();
    }

	public function getGreeting()
	{
		return __('Chat view for KO');
	}
}