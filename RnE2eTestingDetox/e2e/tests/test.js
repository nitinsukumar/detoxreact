/* eslint-env detox/detox */

describe('Example', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('should show "Step One" at the beginning', async () => {
      await expect(element(by.text('Step One'))).toBeVisible();
    });
  
    it('should render "See Your Changes" in the second slide', async () => {
      await element(by.id('slides')).swipe('left');
      await expect(element(by.text('See Your Changes'))).toBeVisible();
    });
  
    it('should enable swiping back and forth', async () => {
      await expect(element(by.text('Step One'))).toBeVisible();
      await element(by.id('slides')).swipe('left');
      await element(by.id('slides')).swipe('right');
      await expect(element(by.text('Step One'))).toBeVisible();
    });
  
    it('should render "Debug" and have a Button to click in the third slide', async () => {
      await element(by.id('slides')).swipe('left');
      await element(by.id('slides')).swipe('left');
      await expect(element(by.text('Debug'))).toBeVisible();
  
      await element(by.text('CLICK HERE!')).tap();
      await expect(element(by.text('Clicked!'))).toBeVisible();
      await element(by.text('OK')).tap();
    });
  
    it('should render "Learn More" and change text in the fourth slide', async () => {
      await element(by.id('slides')).swipe('left');
      await element(by.id('slides')).swipe('left');
      await element(by.id('slides')).swipe('left');
      await expect(element(by.text('Learn More'))).toBeVisible();
  
      const docsInput = element(by.id('docsInput'));
  
      await expect(docsInput).toBeVisible();
  
      await docsInput.clearText();
      await docsInput.typeText('Maybe later!');
      device.pressBack();
  
      await expect(docsInput).toHaveText('Maybe later!');
    });

    it('scroll down and see some text at the bottom', async() => {
        await waitFor(element(by.text('Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.'))).toBeVisible().whileElement(by.type('android.widget.ScrollView')).scroll(200, 'down');
    })
  });